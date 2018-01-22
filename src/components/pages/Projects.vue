<template>
  <div id="projects">
    <p>click on category names to show all descriptions, or hover over a specific project.</p>
    <p>starred projects are incomplete.</p>

    <project-category class="project-category hover-dark-red" :projects="projectsByCategory('general')" name="general"></project-category>
    <project-category class="project-category hover-blue" :projects="projectsByCategory('web')" name="web"></project-category>
    <project-category class="project-category hover-dark-green" :projects="projectsByCategory('games')" name="games"></project-category>
  </div>
</template>

<script>
  import ProjectCategory from '../utils/ProjectCategory'
  import d from '../../data'

  export default {
    name: "projects",
    methods: {
      projectsByCategory (name) {
        return d.projects.filter(p => p.category === name);
      }
    },
    components: {
      ProjectCategory
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
