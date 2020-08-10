<template lang="pug">
  .container
    div
      h1.title
        |TEA Time
      h2.subtitle
        |伝えたいことを優しく残す
      h3
        |Course
      ul
        li(
          v-for = "(post, index) in courses"
          :key = "`courses-${index}`"
          )
          nuxt-link(
            :to = "{ name: 'slug-id', params: { slug: 'course', id: post.fields.slug } }"
            @click.native = "setData(post.fields)"
            )
            |{{ post.fields.title }}
      h3
        |Lesson
      ul
        li(
          v-for = "(post, index) in lessons"
          :key = "`lessons-${index}`"
          )
          nuxt-link(
            :to = "{ name: 'wiki-id', params: { id: post.fields.slug } }"
            )
            |{{ post.fields.title }}
      .links
        Btn(
          tag = "a"
          href = "https://github.com/heines/nuxtjs"
          :isBlank = "true"
          )
          |GitHub
        Btn(
          tag = "nuxt-link"
          to = "next"
          color = "grey"
          :isBlank = "true"
          )
          |to NEXT page
</template>

<script>
import Logo from "@/components/Logo.vue";
import Btn from "@/components/atoms/Btn.vue";
import { createClient } from "~/plugins/contentful.js";
const client = createClient();
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
      title: "NUXT"
    };
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
  },
  methods: {
    setData(data) {
      this.$store.commit("blog/setBlogData", data);
    }
  }
};
</script>

<style lang="scss">
.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @include l-mobile {
    padding-top: 40px;
  }
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  margin: 0;
  font-weight: 300;
  @include fontSizeAll(72, 64, 36);
  line-height: 1;
  color: $color-title;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  @include fontSizeAll(36, 32, 18);
  color: $color-subtitle;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
