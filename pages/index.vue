<template lang="pug">
  .container
    .contents
      h1.title
        |TEA Time
      h2.subtitle
        |伝えたいことを優しく残す
      .contents__body
        .contents__item
          h3 記事を投稿する
          h3 Wikiを書く
        .contents__item
          h3 新着
          h4
            |投稿記事
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
          h4
            |Wiki
          ul
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
      title: "NUXT"
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
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
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

.contents {
  width: 100%;
  padding-left: 20px;
  &__body {
    width: 100%;
    @include l-more-than-mobile {
      display: flex;
      flex-flow: row-reverse;
    }
  }
  &__item {
    @include l-more-than-mobile {
      width: 50%;
    }
  }
}
</style>
