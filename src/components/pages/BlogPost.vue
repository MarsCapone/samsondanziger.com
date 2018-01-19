<template>
  <div>
    <div class="navigation">
      <router-link :to="{ name: 'blogPost', params: {} }"><-- previous post</router-link>
      <!--<router-link :to="{ name: 'blog' }">all posts</router-link>-->
      <router-link :to="{ name: 'blogPost', params: {} }">next post --></router-link>
    </div>

    <div class="title">{{ post.title }}</div>
    <div v-html="content"></div>
  </div>

</template>

<script>
  import { getRaw, getMdUrl, getRootUrl } from "../../store";
  import marked from 'marked'

  export default {
    name: "blog-post",
    data () {
      return {
        id: this.$route.params.id,
        post: { title: '' },
        content: undefined
      }
    },
    mounted () {
      let self = this;

      getRaw(`${getRootUrl()}/blog.json`, function (json) {
        let p = JSON.parse(json);
        self.post = p.posts.find(p => p.id === self.id);
      });

      getRaw(getMdUrl('blog', self.id, false), function (body) {
        if (body === undefined) self.content = 'error: page content could not be found.';
        else self.content = marked(body);
      });
    }
  }
</script>

<style scoped lang="scss">
  .navigation {
    display: flex;
    justify-content: space-evenly;

    a {
      text-align: center;
    }
  }

  .title {
    font-size: 2em;
    font-weight: bold;
  }
</style>
