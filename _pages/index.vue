<template lang="pug">
.index.has-background-white-ter
  .hero.is-medium.has-background-white-bis
    .hero-body
      .container
        h1.title.is-key
          |TEA Time
        h2.subtitle
          |伝えたいことを優しく残す
  .columns.column-row-reverse.mt-0.mr-0.ml-0.mb-0
    .column
      h3 記事を投稿する
      h3 Wikiを書く
    .column
      h3.subtitle.is-5
        |新着
      h4.subtitle.is-6
        |投稿記事
      nuxt-link.box(
        v-for = "(post, index) in newBlog"
        :key = "`courses-${index}`"
        :to = "{ name: 'slug-id', params: { slug: 'course', id: post.fields.slug } }"
        @click.native = "setData(post.fields)"
        )
        |{{ post.fields.title }}
      h4.subtitle.is-6
        |Wiki
      nuxt-link.box(
        v-for = "(post, index) in newWiki"
        :key = "`lessons-${index}`"
        :to = "{ name: 'wiki-id', params: { id: post.fields.slug } }"
        )
        |{{ post.fields.title }}
</template>

<script>
import Logo from "@/components/Logo.vue";
import Btn from "@/components/atoms/Btn.vue";
import client from "@/plugins/contentful.js";
export default {
  components: {
    Logo,
    Btn
  },
  asyncData({ env }) {
    return Promise.all([
      // fetch all blog posts sorted by creation date
      client.getEntries({
        content_type: "course",
        order: "-sys.createdAt"
      }),
      client.getEntries({
        content_type: "lesson",
        order: "-sys.createdAt"
      })
    ])
      .then(([courses, lessons]) => {
        // return data that should be available
        // in the template
        return {
          courses: courses.items,
          lessons: lessons.items
        };
      })
      .catch(console.error);
  },
  data() {
    return {
      title: "TEA Time"
    };
  },
  computed: {
    newBlog() {
      return this.courses.slice(0, 5);
    },
    newWiki() {
      return this.lessons.slice(0, 3);
    }
  },
  methods: {
    setData(data) {
      this.$store.commit("blog/setBlogData", data);
    }
  },
  head() {
    return {
      titleTemplate: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "My custom description"
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "website"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.index {
  flex: 1;
}
</style>
