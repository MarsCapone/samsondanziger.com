<template>
  <div id="app">
    <About @opened="headerClass = 'open'" @closed="headerClass = 'closed'" :class="[ headerClass ]"></About>
    <div id="main">
      <router-view/>
    </div>
  </div>
</template>

<script>

import About from '@/components/utils/About'

export default {
  name: 'app',
  data () {
    return {
      headerClass: 'open'
    }
  },
  components: {
    About
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Alfa+Slab+One|Inconsolata:400,700|Scope+One&subset=latin-ext');
  @import 'assets/partials/colours';

  #app {
    font-family: 'Inconsolata', monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: lighten($grey, 20%);
  }

  #header {
    margin: auto;
    width: 100%;
    background-color: white;
    padding-bottom: 20px;

  }

  .bracketed:after {
    content: ']';
  }

  .bracketed:before {
    content: '[';
  }

  .clickable {
    cursor: pointer;
  }

  a {
    color: mclighten($blue);
    &:visited {
      color: mclighten($blue);
    }

    &:hover {
      color: $blue;
      font-weight: bold;
    }
  }

  @include hover-colour('red', $red);
  @include hover-colour('blue', $blue);
  @include hover-colour('green', $green);

</style>
