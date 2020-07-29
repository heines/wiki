<template lang="pug">
  .menu(
    :class = "{ 'is-opened': $store.state.menu.isOpenedMenu }"
    )
    Hamburger.menu__ham
    .menu__bg
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
  position: relative;
  z-index: z(menu);
  &__bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $color-key;
    z-index: z(menu, bg);
  }
  &__ham {
    position: relative;
    z-index: z(menu, link);
  }
  /*
   * transition
   */
  &__bg {
    transform-origin: left;
    transition-duration: 0.2s;
  }
  &.is-opened & {
    &__bg {
      transform-origin: left;
      transform: scaleX(1.5);
      transition-duration: 0.2s;
    }
  }
}
</style>
