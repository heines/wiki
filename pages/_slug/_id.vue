<template lang="pug">
.blog
  h1.title
    |{{ post.title }}
  .desc(
    v-html = "$md.render(post.description)"
    )
</template>
<script>
import client from "@/plugins/contentful.js";
export default {
  asyncData({ env, route }) {
    return Promise.all([
      // fetch all blog posts sorted by creation date
      client.getEntries({
        content_type: env.CTF_BLOG_POST_TYPE_ID,
        "fields.slug[match]": route.params.id,
        order: "-sys.createdAt"
      })
    ])
      .then((post) => {
        // return data that should be available
        // in the template
        return {
          post: post[0].items[0].fields
        };
      })
      .catch(console.error);
  },
  methods: {
    setData(data) {
      this.$store.commit("blog/setBlogData", data);
    }
  },
  head() {
    return {
      title: this.post.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "My custom description2"
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
<style lang="scss" scoped>
.blog {
  @include l-mobile {
    padding-top: 40px;
  }
  &__desc {
    @include fontSizeAll(24, 24, 24);
    color: $color-text;
  }
}
</style>
