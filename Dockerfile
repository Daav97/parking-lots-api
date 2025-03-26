FROM node:22.13

WORKDIR /app

COPY package*.json ./

RUN npm install --omit=dev

COPY . .

EXPOSE 3000

ENV DB_HOST=postgres

CMD ["node", "index.js"]
