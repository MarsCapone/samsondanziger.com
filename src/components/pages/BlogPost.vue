<template>
  <div>
    <div class="navigation">
      <router-link :to="{ name: 'blogPost', params: {} }"><-- previous post</router-link>
      <!--<router-link :to="{ name: 'blog' }">all posts</router-link>-->
      <router-link :to="{ name: 'blogPost', params: {} }">next post --></router-link>
    </div>

    <div class="title">{{ post.title }}</div>
    <div class="content">
      <component :is="currentView"></component>
    </div>
  </div>

</template>

<script>

  import d from '@/data'
  import NullPost from '@/components/content/posts/NullPost'
  import ErrorPost from '@/components/content/posts/ErrorPost'

  export default {
    name: "blog-post",
    data () {
      return {
        id: this.$route.params.id,
        post: { title: '' },
        currentView: NullPost
      }
    },
    created () {
      this.post = d.blog.posts.find(p => p.id === this.id);
      if (this.post.component) {
        this.currentView = import(`../content/posts/${this.post.component}`);
      } else {
        this.currentView = ErrorPost;
      }
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
