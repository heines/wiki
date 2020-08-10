<template lang="pug">
.container
  div
    h1.title
      |topic
    .data(
      v-html="$md.render($store.state.blog.data.description)"
      )
</template>

<script></script>
