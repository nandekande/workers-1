# builder
FROM node:22-slim AS builder

# /app on container
WORKDIR /app

# /package*.json on host > /app/node_modules on container
COPY package*.json ./

# /app/node_modules/... on container
RUN npm ci

# /next-project on host > /app/next-project on container
COPY . .

EXPOSE 3000
EXPOSE 8787
EXPOSE 8976

# development
FROM builder AS development

CMD ["npm", "run", "dev"]
# CMD ["npm", "run", "preview"]