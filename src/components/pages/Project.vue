<template>
  <div :id="category + '-' + id">
    <h1>{{ project.name }}</h1>
    <p>{{ project.description }}</p>
    <div class="content" v-html="compiledMarkdown"></div>
  </div>
</template>

<script>
  import { categories, getRaw, getMdUrl } from "../../store"
  import marked from 'marked'

  export default {
    name: "project",
    data () {
      return {
        category: this.$route.params.category,
        id: this.$route.params.id,
        compiledMarkdown: ''
      }
    },
    computed: {
      project: function () {
        let cat = categories.find(c => c.name === this.category);
        return cat.projects.find(p => p.id === this.id);
      }
    },
    mounted () {
      let self = this;

      let fetchCb = (body) => {
        if (body === undefined) self.compiledMarkdown = 'error: page content could not be found.';
        else self.compiledMarkdown = marked(body);
      };

      if (this.project.url) {
        switch (this.project.url) {
          case ('github'):
            getRaw(getMdUrl(this.category, this.id, false), fetchCb);
            break;
          case 'static':
            getRaw(getMdUrl(this.category, this.id), fetchCb);
            break;
          default:
            getRaw(this.project.url, fetchCb);
            break;
        }
      } else {
        this.compiledMarkdown = marked("### Sorry. There is a page here... There's just nothing on it.");
      }
    }
  }
</script>

<style scoped>

</style>
