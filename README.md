## Демонстрация работы
https://github.com/user-attachments/assets/f7772ecf-3813-4814-a613-960939821b72

## Описание проекта

Используется три docker-контейнера:
1) Сайт на next.js 
2) База данных postgresql 
3) Обратный прокси с помощью nginx

Запуск проекта производится из корня следующим образом:

```bash
docker-compose up --build
```

За работу nginx отвечает 80 порт (http://localhost:80/), по умолчанию запускается 3000 (http://localhost:3000/)

Удобно просмотреть содержимое базы данных можно с использованием функционала ORM Prisma:

```bash
npx prisma studio
```

