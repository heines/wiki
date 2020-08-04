<template lang="pug">
  .menu(
    :class = "{ 'is-opened': $store.state.menu.isOpenedMenu }"
    )
    Hamburger.menu__ham
    .menu__body(
      :class = "{ 'is-opened': $store.state.menu.isOpenedMenu }"
      )
      .menu__item
        Link(
          to = "next"
          label = "next"
          @click.native = "close"
          )
      .menu__item
        Link(
          to = "login"
          label = "login"
          @click.native = "close"
          )
    .menu__bg
</template>
<script>
import Hamburger from "@/components/atoms/Hamburger";
import Link from "@/components/atoms/Link";
export default {
  components: {
    Hamburger,
    Link
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
    @include l-mobile {
      opacity: 0.9;
    }
  }
  &__ham,
  &__body {
    position: relative;
    z-index: z(menu, link);
  }
  &__body {
    &::after {
      @include l-more-than-mobile {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        content: "";
        background-color: $color-key;
      }
    }
  }
  /*
   * transition
   */
  &__body {
    @include l-mobile {
      opacity: 0;
      transition-duration: 0.2s;
    }
    &::after {
      @include l-more-than-mobile {
        transition: transform;
        transition-duration: 0.2s;
        transition-delay: 0.2s;
        transform-origin: right;
      }
    }
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
      @include l-mobile {
        opacity: 1;
        transition-duration: 0.2s;
      }
      &::after {
        @include l-more-than-mobile {
          transition: transform;
          transition-duration: 0.2s;
          transition-delay: 0.2s;
          transform: scaleX(0);
          transform-origin: right;
        }
      }
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
