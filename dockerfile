# Используем базовый образ Node.js
FROM node:18-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json для установки зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь проект в контейнер
COPY . .

# Компилируем Next.js в production-режим
RUN npm run build

# Указываем порт, который будет слушать приложение
EXPOSE 3000

# Запускаем приложение
CMD ["npm", "start"]