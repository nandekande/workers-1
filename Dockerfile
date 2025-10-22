FROM node:22-slim AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm i -D -E @biomejs/biome

COPY . .

EXPOSE 3000
EXPOSE 8787

FROM builder AS development

CMD ["npm", "run", "dev"]