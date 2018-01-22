<template>
  <div class="project-category-item"
       @mouseenter="mouseEnter"
       @mouseleave="mouseLeave"
       @click="goToPage">
    <div class="col project-name" :class="{ described, selected }">{{ project.name }}</div>
    <div v-show="showDescription" class="col project-description">{{ project.description }}</div>
  </div>
</template>

<script>
  export default {
    name: "project",
    props: [ 'project', 'selected' ],
    data () {
      return {
        showDescription: this.selected,
        described: this.project.description !== undefined
      }
    },
    watch: {
      selected: function (val) {
        this.showDescription = val;
      }
    },
    methods: {
      goToPage: function () {
        console.log('going to page: %s', this.project.id);
        this.$router.push({
          name: 'project', params: {
            id: this.project.id,
            category: this.project.category
          }
        });
      },
      mouseEnter: function() {
        if (!this.selected) {
          this.showDescription = true;
        }
      },

      mouseLeave: function () {
        if (!this.selected) {
          this.showDescription = false;
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .project-category-item {
    padding: 2px 0;
    cursor: pointer;
    text-align: center;
    margin: 30px 0;


    .col {
      &:hover {
        display: inline-block;
      }

      @media screen and (max-width: 700px) {
        display: inline-block;
      }
    }

    .project-name {
      display: block;

      &.selected {
        font-weight: bold;
      }

      @media screen and (max-width: 700px) {
        font-weight: bold;

        &:after.described {
          content: ':';
        }
      }
    }

    &:hover .project-name {
      font-weight: bold;
    }
  }
</style>
