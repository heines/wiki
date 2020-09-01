<template lang="pug">
.index
  .hero
    .hero-body
      .container
        h1.title
          |TEA Time
        h2.subtitle
          |伝えたいことを優しく残す
  .columns.column-row-reverse.mt-0.mr-0.ml-0.mb-0
    .column
      h3 記事を投稿する
      h3 Wikiを書く
    .column
      h3 新着
      h4
        |投稿記事
      ul.box
        li(
          v-for = "(post, index) in courses"
          :key = "`courses-${index}`"
          )
          nuxt-link(
            :to = "{ name: 'slug-id', params: { slug: 'course', id: post.fields.slug } }"
            @click.native = "setData(post.fields)"
            )
            |{{ post.fields.title }}
      h4
        |Wiki
      ul.box
        li(
          v-for = "(post, index) in lessons"
          :key = "`lessons-${index}`"
          )
          nuxt-link(
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
