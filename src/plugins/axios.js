import axios from 'axios'

const api = axios.create({
  baseURL: 'http://backendapi/api',
})

api.interceptors.request.use(config => {
  const token = localStorage.getItem('access_token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Интерцептор ответов — перехватываем 401
api.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      const refreshToken = localStorage.getItem('refresh_token')

      try {
        const res = await axios.post('http://backendapi/api/refresh', {
          refresh_token: refreshToken,
        })

        const { access_token, refresh_token } = res.data

        localStorage.setItem('access_token', access_token)
        localStorage.setItem('refresh_token', refresh_token)

        originalRequest.headers.Authorization = `Bearer ${access_token}`
        return api(originalRequest)
      } catch (refreshError) {
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
        window.location.href = '/login' // редиректим на логин
        return Promise.reject(refreshError)
      }
    }

    return Promise.reject(error)
  }
)

export default api
