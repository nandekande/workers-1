FROM node:22-slim AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000
EXPOSE 8787

FROM builder AS development

CMD ["npm", "run", "dev"]