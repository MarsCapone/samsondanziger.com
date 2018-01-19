<template>
  <div>
    <blog-search-bar @input="update"></blog-search-bar>

    <h2>term</h2>
    <p>{{ search.term }}</p>

    <h2>tags</h2>
    <p v-for="tag in search.tags">{{ tag }}</p>

    <h2>other</h2>
    <p v-if="search.strict">strict</p>
    <p v-else>not strict</p>


  </div>
</template>

<script>
  import BlogSearchBar from '../utils/BlogSearchBar'

  export default {
    name: "demo-page",
    data () {
      return {
        search: BlogSearchBar.methods.init()
      }
    },
    methods: {
      update: function (search) {
        this.search = search;
        console.log(JSON.stringify(this.search));
      }
    },
    components: {
      BlogSearchBar
    }
  }
</script>

<style scoped>

</style>
