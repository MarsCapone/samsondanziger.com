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

  import { getRaw, getRootUrl } from '../../store'
  import BlogPostEntry from '@/components/utils/BlogPostEntry'
  import BlogSearchBar from '@/components/utils/BlogSearchBar'

  export default {
    name: "blog",
    data () {
      return {
        allPosts: [],
        posts: []
      }
    },
    methods: {
      filter: function (search) {
        console.log(JSON.stringify(search));
        this.posts = this.allPosts.filter(p => {
          console.log(JSON.stringify(p));

          let valid = false;

          if (search.termRef === 'title' || search.termRef === 'any') {
            if (p.title.includes(search.term)) valid = true;
          }

          if (search.termRef === 'description' || search.termRef === 'any') {
            if (p.short.includes(search.term)) valid = true;
          }

          for (let i = 0; i < search.tags.length; i++) {
            let tag = search.tags[i];
            if (p.tags.includes(tag)) valid = true;
          }

          return valid;
        });
      }
    },
    mounted () {
      let self = this;

      getRaw(`${getRootUrl()}/blog.json`, function (json) {
        let p = JSON.parse(json);
        self.allPosts = p.posts;
        self.posts = self.allPosts;
      });

    },
    components: {
      BlogPostEntry,
      BlogSearchBar
    }
  }
</script>

<style scoped>

</style>
