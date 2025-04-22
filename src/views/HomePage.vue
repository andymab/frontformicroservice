<template>
    <v-container>
      <h1>Welcome!</h1>
      <v-btn @click="logout">Logout</v-btn>
    </v-container>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  
  const logout = () => {
    localStorage.removeItem('token')
    router.push('/login')
  }
  </script>
  