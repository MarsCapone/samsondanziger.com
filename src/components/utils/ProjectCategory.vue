<template>
  <div :class="[ hoverColourClass ]">
    <div class="project-category-name" @click="toggleSelected">{{ category.name }}</div>
    <div class="project-category-projects">
      <project v-for="project in category.projects" :key="`${category}-${project.id}`" :project="project" :category="category" :selected="selected"></project>
    </div>
  </div>
</template>

<script>
  import Project from '@/components/utils/Project'

  export default {
    name: "project-category",
    props: [ 'category' ],
    components: {
      Project
    },
    data () {
      return {
        selected: false
      }
    },
    computed: {
      hoverColourClass: function () {
        return 'hover-' + this.category.colour;
      }
    },
    methods: {
      toggleSelected: function() {
        this.selected = !this.selected;
      }
    }
  }
</script>

<style lang="scss">

  @import '../../assets/partials/colours';

  .project-category {

    .project-category-name {
      font-size: 2em;
    }

    .project-category-projects {
      padding: 10px 5px;
    }
  }
</style>
