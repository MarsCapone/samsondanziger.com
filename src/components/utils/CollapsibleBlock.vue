<template>
  <div class="collapsible collapsible-block">
    <div class="top-border"></div>
    <div class="content" id="hiding" :class="[state]" v-show="open">
      <slot>
        this bit hides
      </slot>
    </div>
    <div class="content fixed">
      <div class="col col-left">
        <slot name="fixed-left"></slot>
      </div>
      <div class="col col-toggle" @click="toggle()">
        <div class="bracketed clickable"  id="toggle">
          <span v-if="open">hide</span><span v-else>show</span>bio
        </div>
      </div>
      <div class="col col-right">
        <slot name="fixed-right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "collapsible-block",
    props: [ 'cName' ],
    data () {
      return {
        open: true
      }
    },
    computed: {
      state: function () {
        if (this.open) {
          return this.cName + '-open';
        } else {
          return this.cName + '-closed';
        }
      }
    },
    methods: {
      toggle: function () {
        this.open = !this.open;
        this.$emit('toggle', { open: this.open });
      }
    }
  }
</script>

<style lang="scss">

  @import '../../assets/partials/colours';

  .collapsible-block {
    box-sizing: border-box;
    margin: auto;

    #toggle {
      width: auto;
      flex: 0 0 auto;

      &:hover {
        color: mcdarken($grey);
      }
    }

    .content {
      margin: 10px;
      display: flex;
      justify-content: space-evenly;

      @media screen and (max-width: 700px) {
        display: block;
      }

    }

    .col {
      display: inline-block;
      margin: auto;
      margin-left: 10px;
      margin-right: 10px;

      &.col-toggle {
        width: auto;
      }

      &.col-left, &.col-right {
        width: 30%;
      }

      * {
        padding: 2px;
        padding-left: 5px;
        padding-right: 5px;
      }

      @media screen and (max-width: 700px) {
        display: block;
        margin: auto;

        &.col-left, &.col-right {
          width: 100%;
        }
      }
    }
  }
</style>
