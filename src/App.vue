<template>
  <modal-factory />
  <router-view />
</template>
<script>
import ModalFactory from '@/components/ModalFactory/IndexModal'
export default {
  component: { ModalFactory }
}
</script>
