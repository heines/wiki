<template lang="pug">
  .main
    Menu
    nuxt
</template>
<script>
import Menu from "@/components/Menu";
export default {
  components: {
    Menu
  }
};
</script>
<style lang="scss">
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.main {
  width: 100%;
  @include l-more-than-mobile {
    display: flex;
  }
}
</style>
