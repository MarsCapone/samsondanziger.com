<template>
  <div class="blog-post-entry" @click="goToBlogPage">
    <div class="main">
      <div class="title">{{ post.title }}</div>
      <div class="description">{{ post.short }}</div>
    </div>
    <div class="other">
      <div class="date bracketed">{{ post.date }}</div>
      <div class="tags bracketed">{{ tags }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "blog-post-entry",
    props: [ 'post' ],
    computed: {
      tags: function () {
        if (this.post.tags) return this.post.tags.join('|');
        else return '';
      }
    },
    methods: {
      goToBlogPage: function () {
        this.$router.push({ name: 'blogPost', params: { id: this.post.id }});
      }
    }
  }
</script>

<style scoped lang="scss">

  @import "../../assets/partials/colours";

  .blog-post-entry {
    width: 70%;
    margin: 0 auto;
    padding: 20px 10px;
    cursor: pointer;
    box-sizing: content-box;

    &:hover {
      color: $blue;
      border: 1px solid $blue;
      border-radius: 10px;
    }

    .main {
      display: inline-block;
      width: 60%;
      text-align: left;

      .title {
        font-size: 1.5em;
        font-weight: bold;
      }
    }

    .other {
      display: inline-block;
      width: 30%;
      text-align: right;
    }
  }
</style>
