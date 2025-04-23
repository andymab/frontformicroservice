
---

## 📄 `frontend/README.md`

```markdown
# 🖥️ Frontend SPA (Vue 3 + Vuetify 3)

Одностраничное приложение на Vue 3 + Vuetify 3. Подключается к Laravel Auth микросервису через REST API. Использует токен для авторизации.

## 🚀 Стек технологий

- Vue 3 + Composition API
- Vuetify 3
- Vite
- Axios
- Vue Router
- SCSS (модули)
- REST API

## ⚙️ Установка

```bash
git clone https://your.repo/frontend.git
cd frontend
npm install
npm run dev
```

🔐 Аутентификация и авторизация
Используется авторизация через access_token и refresh_token.

Токены хранятся в localStorage:

access_token используется для всех API-запросов.

Если access токен истёк — автоматически отправляется refresh запрос.

Если refresh тоже недействителен — пользователя отправляет на /login

📦 Axios
Создан плагин plugins/axios.js с интерцепторами:

request: подставляет Authorization: Bearer <access_token>.

response: если получен 401, делает попытку обновить токен.