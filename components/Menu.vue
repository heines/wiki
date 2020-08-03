<template lang="pug">
  .menu(
    :class = "{ 'is-opened': $store.state.menu.isOpenedMenu }"
    )
    Hamburger.menu__ham
    .menu__body(
      :class = "{ 'is-opened': $store.state.menu.isOpenedMenu }"
      )
      .menu__item
        nuxt-link.button--green(
          to = "next"
          @click.native = "close"
          )
          |next
      .menu__item
        nuxt-link.button--green(
          to = "login"
          @click.native = "close"
          )
          |login
    .menu__bg
</template>
<script>
import Hamburger from "@/components/atoms/Hamburger";
export default {
  components: {
    Hamburger
  },
  methods: {
    close() {
      this.$store.commit("menu/toggleModalMenu", "toggleModalMenu");
    }
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
  &__ham,
  &__body {
    position: relative;
    z-index: z(menu, link);
  }
  /*
   * transition
   */
  &__body {
    opacity: 0;
  }
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
    &__body {
      opacity: 1;
    }
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
