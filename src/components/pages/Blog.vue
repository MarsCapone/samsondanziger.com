<template>
  <div>
    <blog-search-bar @input="filter"></blog-search-bar>

    <h1>(irregularly updated) blog</h1>

    <div class="post-list" v-if="posts.length > 0">
      <blog-post-entry v-for="post in posts" :key="post.title" :post="post">{{ post.title }}</blog-post-entry>
    </div>
    <div class="post-list" v-else>
      sorry, no posts found with that search term
    </div>
  </div>
</template>

<script>

  import d from '@/data'
  import BlogPostEntry from '@/components/utils/BlogPostEntry'
  import BlogSearchBar from '@/components/utils/BlogSearchBar'


  export default {
    name: "blog",
    data () {
      return {
        allPosts: d.blog.posts,
        posts: d.blog.posts
      }
    },
    methods: {
      filter: function (search) {
        this.posts = this.allPosts.filter(p => {
          let valid = false;

          if (search.termRef === 'title' || search.termRef === 'any') {
            if (p.title.toLowerCase().includes(search.term.toLowerCase())) valid = true;
          }

          if (search.termRef === 'description' || search.termRef === 'any') {
            if (p.short.toLowerCase().includes(search.term.toLowerCase())) valid = true;
          }

          for (let i = 0; i < search.tags.length; i++) {
            let tag = search.tags[i];
            if (p.tags.map(t => t.toLowerCase()).includes(tag.toLowerCase())) valid = true;
          }

          return valid;
        });
      }
    },
    components: {
      BlogPostEntry,
      BlogSearchBar
    }
  }
</script>

<style scoped>

</style>
