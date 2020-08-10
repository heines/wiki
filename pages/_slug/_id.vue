<template lang="pug">
.blog
  h1.title
    |{{ $store.state.blog.data.title }}
  .data(
    v-html="$md.render($store.state.blog.data.description)"
    )
</template>
<script></script>
<style lang="scss" scoped>
.blog {
  text-align: left;
}
</style>
