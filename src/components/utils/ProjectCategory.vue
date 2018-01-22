<template>
  <div>
    <div class="category-name" @click="toggleSelected">{{ name }}</div>
    <div class="category-items">
      <project v-for="project in projects" :key="project.id" :project="project" :selected="selected"></project>
    </div>
  </div>
</template>

<script>
  import Project from '@/components/utils/Project'

  export default {
    name: "project-category",
    props: [ 'name', 'projects' ],
    components: {
      Project
    },
    data () {
      return {
        selected: false
      }
    },
    methods: {
      toggleSelected: function() {
        this.selected = !this.selected;
      }
    }
  }
</script>

<style scoped lang="scss">

  .category-name {
    font-size: 2em;
  }

  .category-items {
    padding: 10px 5px;
  }
</style>
