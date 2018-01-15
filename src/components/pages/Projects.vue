<template>
  <div id="projects">
    <p>click on category names to show all descriptions, or hover over a specific project.</p>
    <p>starred projects are incomplete.</p>
    <div v-for="category in categories" v-if="category.projects.length > 0" class="project-category">
      <project-category :category="category"></project-category>
    </div>
  </div>
</template>

<script>
    import { categories } from '../../store'
    import ProjectCategory from '../utils/ProjectCategory'

    export default {
      name: "projects",
      components: {
        ProjectCategory
      },
      data () {
        return {
          categories
        }
      }
    }
</script>

<style lang="scss">
  #projects {
    margin: auto;

    .project-category {
      display: inline-block;
      width: 30%;
      padding: 10px;
      vertical-align: top;

      @media screen and (max-width: 700px) {
        display: block;
        width: 80%;
        margin: auto;
      }
    }
  }
</style>
