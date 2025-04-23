<template>
  <v-app>
    <v-main class="login-wrapper">
      <div class="login-background" />

      <v-container class="d-flex align-center justify-center fill-height">
        <div class="login-scale-wrapper">
          <v-card class="login-card" >
            <v-card-text>
              <div class="logo-container">
                <img src="@/assets/media/logo.svg" alt="Askbox Logo" class="logo" />
              </div>

              <h2 class="login-title">Вход и регистрация</h2>

              <v-text-field v-model="nickname" label="Никнейм" placeholder="@nickname" variant="outlined"
                density="comfortable" class="mb-4" />

              <v-text-field v-model="password" label="Пароль" type="password" variant="outlined" density="comfortable"
                class="mb-6" />

              <v-btn block class="submit-btn" @click="login">
                Продолжить
              </v-btn>

              <div class="divider"><span>или вход через</span></div>

              <div class="socials">
                <v-btn v-for="icon in socialIcons" :key="icon.name" class="social-btn"
                  :style="{ backgroundColor: icon.color }" icon>
                  <v-icon :icon="icon.icon" size="24" />
                </v-btn>
              </div>
            </v-card-text>
          </v-card>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
  // import TikTokIcon from '@/components/icons/TikTokIcon.vue'
  // import TelegramIcon from '@/components/icons/TelegramIcon.vue'
  // import AppleIcon from '@/components/icons/AppleIcon.vue'
  // import GmailIcon from '@/components/icons/GmailIcon.vue'
  // import VkIcon from '@/components/icons/VkIcon.vue'
  // import WhatsAppIcon from '@/components/icons/WhatsAppIcon.vue'
  import { ref } from 'vue'

  const nickname = ref('')
  const password = ref('')
  const socialIcons = [
    // { name: 'tiktok', color: '#ff0000', component: TikTokIcon },
    // { name: 'telegram', color: '#28A8E9', component: TelegramIcon },
    // { name: 'apple', color: '#f36c3d', component: AppleIcon },
    // { name: 'gmail', color: '#EA4335', component: GmailIcon },
    // { name: 'vk', color: '#4C75A3', component: VkIcon },
    // { name: 'whatsapp', color: '#25D366', component: WhatsAppIcon },
    { name: 'twitch', icon: 'mdi-twitch', color: '#6441a5' },
    { name: 'youtube', icon: 'mdi-youtube', color: '#ff0000' },
    { name: 'facebook', icon: 'mdi-facebook', color: '#3b5998' },
    { name: 'discord', icon: 'mdi-discord', color: '#5865F2' },
    { name: 'boosty', icon: 'mdi-flash', color: '#f36c3d' },
    // добавь TikTok, Telegram, Apple и др. по аналогии
  ]

  const login = () => {
    console.log('Логин:', nickname.value, password.value)
  }
</script>

<style scoped lang="scss">
  .login-wrapper {
    position: relative;

    width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    background-color: #7b4be2;
    background-image: url('@/assets/media/bg-pattern.png');
    background-repeat: repeat;
    background-size: 120px auto;
    background-position: center;

    display: flex;
    align-items: center;
    justify-content: center;




    .v-container {
      z-index: 1;
    }

    .login-card {
      width: 100%;
      max-width: 420px;
      border-radius: 20px;
      padding: 32px 24px;
      background-color: white;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    }

    .logo-container {
      display: flex;
      justify-content: center;
      margin-bottom: 16px;

      .logo {
        height: 103px;
      }
    }

    .login-title {
      text-align: center;
      margin-bottom: 32px;
      font-weight: 600;
      font-size: 20px;
    }

    .submit-btn {
      background-color: #7b4be2;
      color: white;
      font-weight: bold;
      margin-bottom: 24px;
    }

    .divider {
      text-align: center;
      font-size: 14px;
      color: #888;
      margin-bottom: 12px;
      border-top: 1px solid #ddd;
      padding-top: 12px;
    }

    .socials {
      display: flex;
      justify-content: center;
      gap: 10px;

      .social-btn {
        border-radius: 50%;
        color: white;
        width: 42px;
        height: 42px;
        min-width: unset;
      }
    }

  }

  .login-scale-wrapper {
    transform-origin: top center;
    transition: transform 0.2s ease;

    @media (max-height: 600px) {
      transform: scale(0.9);
    }
  }
</style>