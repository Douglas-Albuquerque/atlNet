# Use a imagem oficial do Node.js como imagem base
FROM node:20-alpine

# Crie e defina o diretório de trabalho dentro do contêiner
WORKDIR /app/frontend

# Copie o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do aplicativo
RUN npm install

# Copie o restante dos arquivos do aplicativo para o diretório de trabalho
COPY . .

# Exponha a porta em que o aplicativo será executado
EXPOSE 3000

# Comando para iniciar o aplicativo
CMD ["npm", "start", "App.js"]
