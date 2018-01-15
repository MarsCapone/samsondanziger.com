<template>
  <div id="header" ref="aboutBlock">
    <router-link :to="{ name: 'index' }" tag="div" class="clickable" id="title">samson danziger</router-link>
    <collapsible-block cName="about" @toggle="toggleAboutOpen">
      <div id="bio">
        I am a software developer based in London. I have a BSc in Computer Science from the University of
        Southampton. I undertake interesting projects in any language that takes my fancy. I enjoy creating tools,
        and backend applications, although I have started developing my web skills.
      </div>

      <div class="bracketed" slot="fixed-left">
        <hover-change-link url="mailto:samson@danziger.online" default-value="email" hover-value="samson@danziger.online"></hover-change-link>|<hover-change-link url="https://github.com/marscapone" default-value="github" hover-value="MarsCapone"></hover-change-link>
      </div>

      <div slot="fixed-right">
        <div class="bracketed">
          <router-link :to="{ name: 'cv' }" tag="a">cv</router-link>|<router-link :to="{ name: 'contact' }">contact</router-link>|<router-link :to="{ name: blogOrProjects }">{{ blogOrProjects }}</router-link>
        </div>
      </div>
    </collapsible-block>
  </div>
</template>

<script>
  import CollapsibleBlock from "../utils/CollapsibleBlock";
  import HoverChangeLink from '../utils/HoverChangeLink';

  export default {
    name: "about",
    components: {
      CollapsibleBlock,
      HoverChangeLink
    },
    data () {
      return {}
    },
    computed: {
      blogOrProjects: function () {
        let pathParts = this.$route.path.split('/');
        pathParts = pathParts.filter(p => p !== '');
        if (pathParts[0] === 'blog') {
          return 'projects';
        } else {
          return 'blog';
        }
      }
    },
    methods: {
      toggleAboutOpen: function ({ open }) {
        if (open) this.$emit('opened');
        else this.$emit('closed');
      }
    }
  }
</script>

<style lang="scss">
  @import '../../assets/partials/colours';

  #title {
    font-family: 'Scope One', serif;
    font-size: 4em;
    color: mcdarken($grey);
  }

  #bio {
    width: 70%;
    text-align: center;
    margin: auto;
  }

</style>
