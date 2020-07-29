<template lang="pug">
  .menu
    Hamburger
</template>
<script>
import Hamburger from "@/components/atoms/Hamburger";
export default {
  components: {
    Hamburger
  }
};
</script>
<style lang="scss" scoped>
.menu {
  width: 85px;
  height: 100vh;
  background-color: $color-key;
}
</style>
