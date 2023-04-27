<template>
  <component :is="name" />
</template>

<script>
export default {
  props: {
    name: { type: String, required: true }
  }
}

</script>
