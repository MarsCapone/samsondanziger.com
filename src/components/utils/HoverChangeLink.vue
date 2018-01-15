<template>
  <a class="hover-change-link" :href="url"><span class="default-link">{{ defaultValue }}</span><span class="hover-link">{{ hoverValue }}</span></a>
</template>

<script>
  export default {
    name: 'hover-change-link',
    props: [ 'url', 'defaultValue', 'hoverValue' ]
  }
</script>

<style scoped lang="scss">
  .hover-change-link {

    .default-link {
      visibility: visible;
      display: inline;
    }

    .hover-link {
      visibility: hidden;
      display: none;
    }

    &:hover .default-link {
      visibility: hidden;
      display: none;
    }

    &:hover .hover-link {
      visibility: visible;
      display: inline;
    }
  }
</style>
