<template>
  <div class="flex justify-center w-full h-20 bg-blue-500">
    <header-logged />
  </div>

  <div class="flex flex-col items-center justify-center h-64 bg-gray-300">
    <h1 class="text-4xl font-black text-center text-gray-800">
      Feedbacks
    </h1>
    <p class="text-lg font-regular text-center text-gray-800">
      Feedbacks
    </p>
  </div>
</template>
<script>
import HeaderLogged from '@/components/Header/HeaderLogged.vue'
export default {
  components: { HeaderLogged }
}
</script>
