<template>
  <div class="flex justify-between">
    <h1 class="text-4xl font-black text-gray-800 hover:cursor-pointer">
      Entre na sua conta
    </h1>

    <button
      @click="close"
      class="text-4xl text-gray-600 focus:outline-none hover:text-red-600"
    >
      &times;
    </button>
  </div>

  <div class="mt-12">
    <form @submit.prevent="handleSubmit">
      <label class="block mb-5">
        <span class="text-lg font-medium text-gray-800">E-mail</span>
        <input
          v-model="state.email.value"
          type="email"
          :class="{
            'border-red-600': !!state.email.errorMessage
          }"
          class="block w-full px-4 py-3 mt-1 text-lg bg-gray-100 border-2 rounded"
          placeholder="jane.dae@gmail.com"
        >
        <span
          v-if="!!state.email.errorMessage"
          class="block font-medium text-red-600"
        >
          {{ state.email.errorMessage }}
        </span>
      </label>
      <label class="block">
        <span class="text-lg font-medium text-gray-800 mb-5">Senha</span>
        <input
          v-model="state.password.value"
          type="password"
          :class="{
            'border-red-600': !!state.password.errorMessage
          }"
          class="block w-full px-4 py-3 mt-1 text-lg bg-gray-100 border-2 rounded"
          placeholder="*********"
        >
        <span
          v-if="!!state.password.errorMessage"
          class="block font-medium text-red-600"
        >
          {{ state.password.errorMessage }}
        </span>
      </label>

      <button
        :disabled="state.isLoading"
        type="submit"
        :class="{
          'opacity-50': state.isLoading
        }"
        class="px-8 py-3 mt-10 text-2xl font-bold text-white rounded-full bg-blue-500 focus:outline-none hover:bg-blue-400 hover:text-white transition-all duration-150"
      >
        Entrar
      </button>
    </form>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { useField } from 'vee-validate'
import useModal from '@/hooks/useModal'
import { validateEmptyAndLength3, validateEmptyAndEmail } from '@/utils/validators'
import services from '@/services/auth'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'

export default {
  setup () {
    const router = useRouter()
    const modal = useModal()
    const toast = useToast()

    const {
      value: emailValue,
      errorMessage: emailErrorMessage
    } = useField('email', validateEmptyAndEmail)

    const {
      value: passwordValue,
      errorMessage: passwordErrorMessage
    } = useField('password', validateEmptyAndLength3)

    const state = reactive({
      hasErrors: false,
      isLoading: false,
      email: {
        value: emailValue,
        errorMessage: emailErrorMessage
      },
      password: {
        value: passwordValue,
        errorMessage: passwordErrorMessage
      }
    })

    async function handleSubmit () {
      try {
        toast.clear()
        state.isLoading = true
        const { data, errors } = await services.auth.login({
          email: state.email.value,
          password: state.password.value
        })

        if (!errors) {
          window.localStorage.setItem('token', data.token)
          router.push({ name: 'Feedbacks' })
          modal.close()
          return
        }

        if (errors.status === 404) {
          toast.error('E-mail não encontrado')
        }

        if (errors.status === 401) {
          toast.error('E-mail/senha inválidos')
        }

        if (errors.status === 400) {
          toast.error('Ocorreu um erro ao fazer o login.')
        }
      } catch (error) {
        state.isLoading = false
        state.hasErrors = !!error
        toast.error('Ocorreu um erro ao fazer o login.')
      }
    }

    return {
      state,
      close: modal.close,
      handleSubmit
    }
  }
}
</script>
