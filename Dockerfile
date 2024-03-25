FROM node:20

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build:api

EXPOSE 3000
CMD ["node", "dist/src/server/index.js"]
