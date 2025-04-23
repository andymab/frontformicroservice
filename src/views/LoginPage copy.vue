
  <template>
    <v-container class="login-container" fluid>
      <v-row justify="center" align="center" class="fill-height">
        <v-col cols="12" sm="8" md="4">
          <v-card class="pa-6 rounded-xl elevation-10">
            <h2 class="text-h5 font-weight-bold mb-6 text-center">Вход</h2>
  
            <v-form @submit.prevent="login">
              <v-text-field
                v-model="email"
                label="Email"
                type="email"
                outlined
                dense
                hide-details
                class="mb-4"
              />
  
              <v-text-field
                v-model="password"
                label="Пароль"
                type="password"
                outlined
                dense
                hide-details
                class="mb-2"
              />
  
              <v-row class="mb-4" align="center" justify="space-between">
                <v-checkbox v-model="rememberMe" label="Запомнить меня" density="compact" hide-details />
                <a class="forgot-link" href="#">Забыли пароль?</a>
              </v-row>
  
              <v-btn type="submit" block color="primary" size="large" class="mb-4">
                Войти
              </v-btn>
  
              <div class="text-center">
                Нет аккаунта?
                <RouterLink to="/register" class="register-link">Зарегистрироваться</RouterLink>
              </div>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>

  <script setup>
  import axios from 'axios'
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  const email = ref('')
  const password = ref('')
  const router = useRouter()
  
  const login = async () => {
    try {
      const res = await axios.post('http://backendapi/api/login', {
        email: email.value,
        password: password.value
      }, {
        headers: {
          'X-API-KEY': 'supersecureapikey'
        }
      })
  
      localStorage.setItem('access_token', res.data.access_token)
      localStorage.setItem('refresh_token', res.data.refresh_token)
      axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.access_token}`

      router.push('/')
    } catch (err) {
      alert('Login failed')
      console.error(err)
    }
  }
  </script>