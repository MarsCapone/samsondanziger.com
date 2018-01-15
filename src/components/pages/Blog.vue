<template>
  <div>

    <h1>(irregularly updated) blog</h1>

    <blog-post-entry v-for="post in posts" :key="post.title" :post="post">{{ post.title }}</blog-post-entry>
  </div>
</template>

<script>

  import { getRaw, getRootUrl } from '../../store'
  import BlogPostEntry from '@/components/include/BlogPostEntry'

  export default {
    name: "blog",
    data () {
      return {
        posts: undefined
      }
    },
    mounted () {
      let self = this;

      getRaw(`${getRootUrl()}/blog/index.json`, function (json) {
        let p = JSON.parse(json);
        self.posts = p.posts;
      });

    },
    components: {
      BlogPostEntry
    }
  }
</script>

<style scoped>

</style>
