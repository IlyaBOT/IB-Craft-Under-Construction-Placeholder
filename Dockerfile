# Dockerfile
# --- Stage 1: сборка React
FROM node:20-alpine AS build
WORKDIR /app

# Копируем package.json (и lock, если он появится)
COPY package.json ./
# Устанавливаем зависимости. Это создаст package-lock.json в контейнере.
RUN npm install

# Копируем исходный код и собираем проект
COPY . .
RUN npm run build

# --- Stage 2: веб-сервер для статики
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
