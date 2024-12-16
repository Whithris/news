FROM node:18-alpine

COPY package*.json .

RUN npm install

COPY prisma .

RUN npx prisma generate

COPY . .