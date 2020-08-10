<template lang="pug">
.container
  div
    h1.title
      |next page
    h2 course
    ul
      li(
        v-for = "(post, index) in posts"
        :key = "index"
        )
        nuxt-link.button--green(
          :to = "{ name: 'slug-id', params: { slug: 'course', id: post.fields.slug } }"
          @click.native = "setData(post.fields)"
          )
          |{{ post.fields.title }}
</template>

<script>
import { createClient } from "~/plugins/contentful.js";
const client = createClient();
export default {
  asyncData({ env }) {
    return Promise.all([
      // fetch all blog posts sorted by creation date
      client.getEntries({
        content_type: env.CTF_BLOG_POST_TYPE_ID,
        order: "-sys.createdAt"
      })
    ])
      .then((posts) => {
        // return data that should be available
        // in the template
        return {
          posts: posts[0].items
        };
      })
      .catch(console.error);
  },
  data() {
    return {
      title: "NEXT",
      data: ""
    };
  },
  methods: {
    setData(data) {
      this.$store.commit("blog/setBlogData", data);
    }
  },
  head() {
    return {
      title: this.title,
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
