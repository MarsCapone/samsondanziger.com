<template>
  <div>
    <div class="navigation">
      <div class="clickable prev" @click="prevPost" v-show="hasPrev"><-- prev</div>
      <div class="clickable next" @click="nextPost" v-show="hasNext">next --></div>
    </div>

    <div class="title">{{ post.title }}</div>
    <div class="date bracketed">{{ post.date }}</div>
    <div class="tags bracketed" v-if="post.tags">{{ tags }}</div>
    <div class="description">{{ post.short }}</div>
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
        currentIndex: -1,
        currentView: NullPost
      }
    },
    computed: {
      tags: function () {
        if (this.post.tags !== undefined) return this.post.tags.join(' | ');
        else return '';
      },
      // there is a more recent one
      hasNext: function () {
        return this.currentIndex > 0;
      },

      // there is an older one
      hasPrev: function () {
        return this.currentIndex < d.blog.posts.length - 1;
      }
    },
    methods: {
      getIdByIndex: function (i) {
        return d.blog.posts[i].id;
      },
      refresh () {
        this.id = this.$route.params.id;
        this.currentIndex = d.blog.posts.findIndex(p => p.id === this.id);
        this.post = d.blog.posts[this.currentIndex];
        if (this.post.component) {
          this.currentView = import(`../content/posts/${this.post.component}`);
        } else {
          this.currentView = ErrorPost;
        }
      },
      nextPost () {
        this.$router.push({ name: 'blogPost', params: { id: this.getIdByIndex(this.currentIndex-1) } });
        this.refresh();
      },
      prevPost () {
        let prevPostId = this.getIdByIndex(this.currentIndex+1);
        console.log('going back to :' + prevPostId);
        this.$router.push({ name: 'blogPost', params: { id: prevPostId } });
        this.refresh();
      }
    },
    created () {
      this.refresh();
    }
  }
</script>

<style scoped lang="scss">

  @import '../../assets/partials/colours';

  div {
    padding: 10px 0;
  }

  .navigation {
    display: flex;
    justify-content: space-evenly;

    div.next, div.prev {
      &:hover {
        font-weight: bold;
        color: $blue;
      }
    }
  }

  .title {
    font-size: 2em;
    font-weight: bold;
  }

  .description {
    font-style: italic;
  }

  .content {
    padding: 20px 0;
  }
</style>
