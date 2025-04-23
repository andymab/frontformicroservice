<template>
  <v-container>
    <h1>Welcome!</h1>
    <v-btn @click="logout">Logout</v-btn>
  </v-container>
</template>

<script setup>
  import { useRouter } from 'vue-router'

  import { onMounted } from 'vue'
 import api from '@/plugins/axios'

  const router = useRouter()

  const logout = () => {
    localStorage.removeItem('access_token')
    router.push('/login')
  }

</script>