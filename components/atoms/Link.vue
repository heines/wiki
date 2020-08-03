<template lang="pug">
  nuxt-router.link(
    to = "to"
    )
    |{{ label }}
</template>
<script>
export default {
  props: {
    to: {
      type: String,
      required: true
    }
  }
};
</script>
<style lang="scss" scoped>
.link {
  cursor: pointer;
  color: #fff;
}
</style>
