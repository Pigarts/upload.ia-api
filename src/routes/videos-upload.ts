import { FastifyInstance } from "fastify"
import { fastifyMultipart } from "@fastify/multipart"
import { randomUUID } from "node:crypto"
import { pipeline } from "node:stream"
import { promisify } from "node:util"
import path from "node:path/posix"
import fs from 'node:fs'
import { prisma } from "../lib/prisma"

const pump = promisify(pipeline)

export async function videoUpload(app: FastifyInstance) {
    app.register(fastifyMultipart, {
        limits: {
            fileSize: 1048576 * 5,
        }
    })
    app.post("/videoupload", async (request, reply) => {
        const data = await request.file()

        if(!data) {
            return reply.status(400).send({error: "Missing file."})
        }
        const extension = path.extname(data.filename)
        if(extension != ".mp3") {
            return reply.status(400).send({error: "Invalid input format type, please upload a .mp3."})
        }
        const fileBaseName = path.basename(data.filename, extension)
        const fileUploadName = `${fileBaseName}-${randomUUID()}${extension}`
        
        const uploadDestination = path.resolve(__dirname, "../tmp", fileUploadName )
        console.log(uploadDestination)

        await pump(data.file, fs.createWriteStream(uploadDestination))

        const video = await prisma.video.create({
            data: {
                name: data.filename,
                path: uploadDestination,
            }
        })

        return {video}
    })
}