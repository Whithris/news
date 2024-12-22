## Демонстрация работы
https://github.com/user-attachments/assets/f7772ecf-3813-4814-a613-960939821b72

## Описание проекта

Используется три docker-контейнера:
1) Сайт на next.js 
2) База данных postgresql 
3) Обратный прокси с помощью nginx

Запуск dev сервера производится из корня следующим образом:

```bash
# Create a network, which allows containers to communicate
# with each other, by using their container name as a hostname
docker network create my_network

# Build dev
docker compose -f compose.dev.yaml build

# Up dev
docker compose -f compose.dev.yaml up
```