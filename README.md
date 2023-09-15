# Upload.IA-API
Português/Portuguese:

Projeto desenvolvido durante o NLW IA da Rocketseat.

**Backend do Projeto Upload.IA**

[link do frontend](https://github.com/Pigarts/upload.ia/tree/main)

Este projeto foi desenvolvido durante o evento NLW IA da Rocketseat com o objetivo de simplificar e promover a primeira aplicação de inteligência artificial para desenvolvedores em seus próprios projetos.

### Lembretes

- lembre-se de renomear o arquivo ".env.example" para ".env" e nele, por sua propria chave da openai
- tambem é importante verificar se em sua conta da openai há creditos suficientes para as cobranças pelo consumo da API

### Instruções de uso

- use no console o comando: "npm i" para realizar a istalação de todas as dependencias dessw projeto
- caso não exista o arquivo de banco de dados "dev.dv" ou voce tenha apagado ele, voce pode usar no console o comando: "npx prisma migrate dev" para crialo/recrialo como padão desse código
- Utilize o seguinte comando no console: “npm run dev” para iniciar o servidor

### Funcionalidades

Este aplicativo (backend) é responsável por:

- Transcrição do conteúdo de arquivos MP3, principalmente em português.
- Armazenamento e listagem de prompts para interação com o ChatGPT.
- Utilização da transcrição gerada para, a partir dos prompts, gerar automaticamente respostas através do ChatGPT.

### Rotas da API

**Upload de Áudio**

- Rota: `POST /videoupload`
- Descrição: Usada para receber arquivos de áudio (.mp3) via método multipart, extraídos dos vídeos pelo frontend. O backend armazena o áudio, salva informações como nome, ID, local de armazenamento e data de registro no banco de dados.

**Gerar Transcrição**

- Rota: `POST /video/{id do vídeo}/transcription`
- Descrição: Recebe um JSON com as palavras-chave ditas no vídeo e realiza a transcrição de todo o conteúdo falado no vídeo usando a API da OpenAI, modelo Whisper-1. A transcrição é armazenada no banco de dados.

**Buscar Prompts Padrões**

- Rota: `GET /prompts`
- Descrição: Retorna todos os prompts cadastrados no banco de dados para a geração de respostas.

**Gerar Respostas através do ChatGPT**

- Rota: `POST /ia/complete`
- Descrição: Recebe um JSON com informações, incluindo o ID do vídeo, o prompt e a temperatura (um valor entre 0 e 1). Esta rota envia essas informações para a API da OpenAI para gerar uma resposta usando o ChatGPT e retorna a resposta no formato de streaming conforme é gerada.

### Como Contribuir

Se desejar contribuir para este projeto, sinta-se à vontade para sigerir novas funções, informar problemas ou possiveis melhorias. Suas contribuições são bem-vindas!


Se precisar de mais informações sobre o projeto ou sobre o desenvolvedor, sinta-se à vontade para entrar em contato.



Inglês/English:
Project developed during Rocketseat's NLW IA event.

**Backend of the Upload.IA Project**

[frontend link](https://github.com/Pigarts/upload.ia/tree/main)

This project was developed during Rocketseat's NLW IA event with the aim of simplifying and promoting the first application of artificial intelligence for developers in their own projects.

### Reminders

- Remember to rename the ".env.example" file to ".env" and in it, place your own OpenAI API key.
- It is also important to check if you have sufficient credits in your OpenAI account to cover the API usage charges.

### Usage Instructions

- Use the following command in the console: "npm i" to install all the dependencies of this project.
- If the database file "dev.db" does not exist or you have deleted it, you can use the following console command: "npx prisma migrate dev" to create/recreate it as the default for this code.
- Use the following command in the console: "npm run dev" to start the server

### Features

This application (backend) is responsible for:

- Transcribing the content of MP3 files, mainly in Portuguese.
- Storing and listing prompts for interaction with ChatGPT.
- Using the generated transcription to automatically generate responses through ChatGPT based on the prompts.

### API Routes

**Audio Upload**

- Route: `POST /videoupload`
- Description: Used to receive audio files (.mp3) via the multipart method, extracted from videos by the frontend. The backend stores the audio, saves information such as name, ID, storage location, and registration date in the database.

**Generate Transcription**

- Route: `POST /video/{video ID}/transcription`
- Description: Receives a JSON with the keywords spoken in the video and transcribes all the spoken content in the video using the OpenAI API, Whisper-1 model. The transcription is stored in the database.

**Retrieve Standard Prompts**

- Route: `GET /prompts`
- Description: Returns all prompts registered in the database for generating responses.

**Generate Responses through ChatGPT**

- Route: `POST /ia/complete`
- Description: Receives a JSON with information, including the video ID, the prompt, and the temperature (a value between 0 and 1). This route sends this information to the OpenAI API to generate a response using ChatGPT and returns the response in a streaming format as it is generated.

### How to Contribute

If you wish to contribute to this project, feel free to suggest new features, report issues, or suggest possible improvements. Your contributions are welcome!

If you need more information about the project or the developer, please feel free to get in touch.
