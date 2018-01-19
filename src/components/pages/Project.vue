<template>
  <div :id="category + '-' + id">
    <h1>{{ project.name }}</h1>
    <p v-if="project.repo" class="bracketed"><a :href="project.repo.protocol + project.repo.url">{{ project.repo.url }}</a></p>
    <p>{{ project.description }}</p>
    <div class="content" v-html="compiledMarkdown"></div>
  </div>
</template>

<script>
  import { getRaw, getMdUrl, getRootUrl } from "../../store"
  import marked from 'marked'

  export default {
    name: "project",
    data () {
      return {
        categories: [],
        category: this.$route.params.category,
        id: this.$route.params.id,
        compiledMarkdown: '',
        project: {}
      }
    },
    watch: {
      categories: function (val) {
        let cat = val.find(c => c.name === this.category);
        this.project = cat.projects.find(p => p.id === this.id);
      }
    },
    mounted () {
      let self = this;

      getRaw(`${getRootUrl()}/projects.json`, function (body) {
        self.categories = JSON.parse(body);
      });

      let fetchCb = (body) => {
        if (body === undefined) self.compiledMarkdown = 'error: page content could not be found.';
        else self.compiledMarkdown = marked(body);
      };

      if (this.project.url) {
        getRaw(this.project.url, fetchCb);
      } else {
        getRaw(getMdUrl(this.category, this.id), fetchCb);
      }
    }
  }
</script>

<style scoped>

</style>
