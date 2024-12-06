FROM node:18-alpine

COPY package*.json .

RUN npm install --save-dev ts-node

COPY prisma .

RUN npx prisma generate

COPY . .

#RUN npm run build

#EXPOSE 3000

#CMD ["npm", "start"]