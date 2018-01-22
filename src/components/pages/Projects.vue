<template>
  <div id="projects">
    <div v-if="atLeastOne(general) || atLeastOne(web) || atLeastOne(games)">
      <p>click on category names to show all descriptions, or hover over a specific project.</p>
      <p>starred projects are incomplete.</p>

      <project-category v-if="atLeastOne(general)" class="project-category hover-dark-red" :projects="general" name="general" />
      <project-category v-if="atLeastOne(web)" class="project-category hover-blue" :projects="web" name="web" />
      <project-category v-if="atLeastOne(games)" class="project-category hover-dark-green" :projects="games" name="games" />
    </div>
    <div v-else>
      there's nothing here right now, <router-link :to="{ name: 'cv' }">check out my CV instead</router-link>.
    </div>
  </div>
</template>

<script>
  import ProjectCategory from '../utils/ProjectCategory'
  import d from '../../data'

  export default {
    name: "projects",
    computed: {
      general: () => d.projects.filter(p => p.category === 'general'),
      web: () => d.projects.filter(p => p.category === 'web'),
      games: () => d.projects.filter(p => p.category === 'games')
    },
    methods: {
      atLeastOne (l) {
        return l.length > 0;
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
