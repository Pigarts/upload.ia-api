import { FastifyInstance } from "fastify"
import { z } from "zod"
import { prisma } from "../lib/prisma"
import { createReadStream, createWriteStream } from "fs"
import { openai } from "../lib/openia"
import { traceDeprecation } from "process"

export async function createTranscription(app: FastifyInstance) {
    app.post(`/videoupload/:videoId/transcription`, async (req) => {
        const paramsSchema = z.object({
            videoId: z.string().uuid(),
        })
      
        const { videoId } = paramsSchema.parse(req.params)

        const bodySchema = z.object({
            prompt: z.string(),
        })

        const { prompt } = bodySchema.parse(req.body)

        const video = await prisma.video.findUniqueOrThrow({
            where: {
                id: videoId,
            }
        })

        const videoPath = video.path

        const audioReadStream = createReadStream(videoPath)

        const response = await openai.audio.transcriptions.create({
            file: audioReadStream,
            model: "whisper-1",
            language: "pt",
            response_format: "json",
            temperature: 0,
            prompt,
        })
        
        const traceDeprecation = response.text

        await prisma.video.update({
            where: {
                id: videoId,
            },
            data: {
                transcription: traceDeprecation
            }
        })

        return { traceDeprecation }
     })
    }
