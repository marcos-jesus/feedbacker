<template>
  <header class="bg-blue-500 w-full h-3/5 flex justify-center">
    <div class="header-group flex flex-col w-4/5 max-w-6xl">
      <div class="flex items-center justify-between py-10">
        <div class="w-28 lg:w-36">
          <img class="w-full" src="@/assets/logo.png" alt="">
        </div>
        <div class="flex">
          <button
            @click="() => emit('create-account')"
            class="px-6 py-2 font-bold  rounded-full text-white focus:outline-none  hover:text-blue-300"
          >
            Crie uma conta
          </button>
          <button
            @click="() => emit('login')"
            class="px-10 py-1 font-bold bg-white rounded-full text-blue-500 focus:outline-none h-10 hover:bg-blue-300 hover:text-white"
          >
            Entrar
          </button>
        </div>
      </div>

      <div class="flex flex-col mt-28">
        <h1 class="text-4xl font-black text-white hover:cursor-pointer">
          Tenha um feedback. <br>
          E faça seus clientes mais <br class="hidden lg:inline-block">
          felizes!
        </h1>
        <p class="text-lg font-medium text-white">
          Receba ideias, reclamações e feedbacks com um
          simples widget na página.
        </p>

        <div>
          <button
            class="px-6 py-2 mt-10 font-bold bg-white rounded-full text-blue-500 focus:outline-none hover:bg-blue-300 hover:text-white"
          >
            Crie uma conta grátis
          </button>
        </div>
      </div>
    </div>

  </header>
</template>

<script>
export default {
  setup (_, { emit }) {
    return { emit }
  }
}
</script>

<style scoped lang="scss">

@media(min-width:840px) {
  .header-group {
    background-image: url('../../assets/baloons.png');
    background-size: 628px;
    position: 80% 100%;
    background-repeat: no-repeat;
  }
}

</style>
