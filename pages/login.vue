<template lang="pug">
.container
  div
    h1.title
      |login
    div ここにgoogle用リンクを追加
</template>

<script>
export default {
  data() {
    return {
      title: "LOGIN"
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "login page"
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "article"
        }
      ]
    };
  }
};
</script>
