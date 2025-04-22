<template>
    <v-container class="d-flex flex-column align-center justify-center" style="height: 100vh;">
      <v-card width="400">
        <v-card-title>Login</v-card-title>
        <v-card-text>
          <v-text-field v-model="email" label="Email" />
          <v-text-field v-model="password" label="Password" type="password" />
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="login">Login</v-btn>
        </v-card-actions>
      </v-card>
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
  
      localStorage.setItem('token', res.data.token)
      axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`
      router.push('/')
    } catch (err) {
      alert('Login failed')
      console.error(err)
    }
  }
  </script>