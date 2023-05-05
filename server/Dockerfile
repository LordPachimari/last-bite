 FROM node:18-alpine
 WORKDIR /server
 COPY package.json ./
 RUN npm install --production
 COPY . .
 CMD ["ts-node", "src/index.ts"]