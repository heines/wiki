<script>
export default {
  props: {
    tag: {
      type: String,
      required: true
    },
    to: {
      type: String
    },
    href: {
      type: String
    },
    color: {
      type: String,
      default: "green"
    },
    isBlank: {
      type: Boolean,
      default: false
    }
  },
  render(createElement) {
    return createElement(
      this.tag,
      {
        class: `button button--${this.color}`,
        attrs: {
          to: this.to,
          href: this.href,
          target: this.isBlank ? "_blank" : ""
        }
      },
      this.$slots.default
    );
  }
};
</script>
<style lang="scss" scoped>
.button {
  cursor: pointer;
  &--green {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid $color-key;
    color: $color-key;
    text-decoration: none;
    padding: 10px 30px;
    &:hover {
      color: $color-text-hover;
      background-color: $color-key;
    }
  }
  &--grey {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid $color-link;
    color: $color-link;
    text-decoration: none;
    padding: 10px 30px;
    margin-left: 15px;
    &:hover {
      color: $color-text-hover;
      background-color: $color-link;
    }
  }
}
</style>
