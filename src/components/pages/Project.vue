<template>
  <div>
    <h1 class="name">{{ project.name }}</h1>
    <p v-if="project.url" class="bracketed url"><a :href="project.url">{{ niceUrl(project.url) }}</a></p>
    <p class="description">{{ project.description }}</p>
    <div class="content">
      <component :is="currentView"></component>
    </div>
  </div>
</template>

<script>
  import d from '@/data'
  import NullProject from '@/components/content/NullProject'

  export default {
    name: "project",
    data () {
      return {
        category: this.$route.params.category,
        id: Number(this.$route.params.id),
        currentView: NullProject,
        project: {}
      }
    },
    created () {
      this.project = d.projects.find(p => p.id === this.id);

      if (this.project.component) {
        this.currentView = () => import(`../content/${this.project.component}`);
      } else {
        this.currentView = () => NullProject;
      }
    },
    methods: {
      niceUrl (url) {
        return url.split('//')[1];
      }
    }
  }
</script>

<style scoped lang="scss">

  .url {
    a {
      padding: 2px 5px;
    }
  }

  .description {
    font-style: italic;
  }

  .content {
    padding: 20px 0;
  }
</style>
