import { fastify } from "fastify"
import { fastifyCors } from "@fastify/cors"
import { getAllPromptsRoute } from "./routes/get-all-prompts"
import { videoUpload } from "./routes/videos-upload"
import { createTranscription } from "./routes/create-transcription"
import { generateIaCompletion } from "./routes/generateIa-completion"

const app = fastify()

app.register(fastifyCors, {
    origin: "*"
})

app.register(getAllPromptsRoute)
app.register(videoUpload)
app.register(createTranscription)
app.register(generateIaCompletion)


app.listen({
    port: 3333,
}).then(() => {console.log(`server running`)
})