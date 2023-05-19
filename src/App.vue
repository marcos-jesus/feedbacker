<template>
  <modal-factory />
  <router-view />
</template>
<script>
import { watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import ModalFactory from '@/components/ModalFactory/IndexModal'
import services from '@/services/users'
export default {
  components: { ModalFactory },

  setup () {
    const router = useRouter() // Ação de rotas
    const route = useRoute() // informações de rota

    watch(() => route.path, async () => {
      if (route.meta.hasAuth) {
        const token = window.localStorage.getItem('token')

        if (!token) {
          router.push({ name: 'Home' })
          return
        }

        const { data } = await services.users.getMe()
        console.log(data)
      }
    })
  }
}
</script>
