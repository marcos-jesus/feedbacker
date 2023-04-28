<template>
  <div class="flex items-center justify-between w-4/5 max-w-6xl py-10 ">
    <div class="w-28 lg:w-36">
      <img class="w-full" src="@/assets/logo.png" alt="Logo">
    </div>

    <div class="flex">
      <ul class="flex list-none">
        <li
          @click="() => router.push({ name: 'Credencials' })"
          class="px-6 py-2 mr-2 font-bold text-white rounded-full cursor-pointer focus:outline-none"
        >
          Credenciais
        </li>
        <li
          @click="() => router.push({ name: 'Feedbacks' })"
          class="px-6 py-2 mr-2 font-bold text-white rounded-full cursor-pointer focus:outline-none"
        >
          Feedbacks
        </li>
        <li
          @click="handleLogout"
          class="px-4 md:px-6 lg:px-6 py-0.5 md:py-2.5 lg:py-2 font-bold bg-white rounded-full cursor-pointer text-blue-500 focus:outline-none"
        >
          Marcos (sair)
        </li>
      </ul>
    </div>
  </div>
</template>
<script>

import { useRouter } from 'vue-router'
export default {
  setup () {
    const router = useRouter()

    function handleLogout () {
      window.localStorage.removeItem('token')
    }

    return {
      router,
      handleLogout
    }
  }
}
</script>
