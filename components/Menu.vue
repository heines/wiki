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
  z-index: z(menu);
  @include l-more-than-mobile {
    position: relative;
    width: 85px;
    height: 100vh;
  }
  @include l-mobile {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  &__bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $color-key;
    z-index: z(menu, bg);
    opacity: 0.9;
  }
  &__ham {
    position: relative;
    z-index: z(menu, link);
  }
  /*
   * transition
   */
  &__bg {
    transition-duration: 0.2s;
    @include l-more-than-mobile {
      transform-origin: left;
    }
    @include l-mobile {
      transform-origin: top;
      transform: translateY(calc(40px - 100%));
    }
  }
  &.is-opened & {
    &__bg {
      transition-duration: 0.2s;
      @include l-more-than-mobile {
        transform-origin: left;
        transform: scaleX(1.5);
      }
      @include l-mobile {
        transform-origin: top;
        transform: translateY(0);
      }
    }
  }
}
</style>
