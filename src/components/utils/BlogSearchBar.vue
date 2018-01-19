<template>
  <div class="blog-search">

    <div class="term">
      <!--<label for="term">search</label>-->
      <input type="text" id="term" placeholder="search" @input="updateTerm" v-model="term">
      <select name="term-ref" id="term-ref" v-model="value.termRef" @input="updateSelected">
        <option v-for="option in options" :value="option">{{ option }}</option>
      </select>
    </div>
    <div class="tags">
      <!--<label for="tags">tags</label>-->
      <input type="text" id="tags" placeholder="tags" @input="updateTags" v-model="tags">
    </div>
    <!--
    <div class="strict">
      <label for="strict">strict</label>
      <input type="checkbox" id="strict" @click="updateStrict">
    </div>-->
    <div class="clear-search bracketed" @click="clearSearch">
      <div>clear</div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "blog-search-bar",
    data () {
      return {
        options: [
          'title', 'description', 'any'
        ],
        term: '',
        tags: [],
        strict: false,
        value: this.init()
      }
    },
    methods: {
      updateTerm (ev) {
        this.value.term = ev.target.value.trim();
        this.$emit('input', this.value);
      },
      updateTags (ev) {
        this.value.tags = this.tags
          .split(',')
          .map(t => t.trim())
          .filter(t => t !== '')
          .sort();

        this.value.tags = this.value.tags.filter((t, i, a) => {
          return !i || t !== a[i-1];
        });

        this.$emit('input', this.value);
      },
      updateSelected (ev) {
        this.value.termRef = ev.target.value;
        this.$emit('input', this.value);
      },
      updateStrict (ev) {
        this.value.strict = ev.target.checked;
        this.$emit('input', this.value);
      },
      clearSearch (ev) {
        this.value = this.init();

        this.term = '';
        this.tags = [];

        this.$emit('input', this.value);
      },
      init: function () {
        return {
          term: '',
          tags: [],
          termRef: 'any',
          strict: false
        }
      }
    },
    mounted () {
      if (!this.value.term) this.value.term = '';
      if (!this.value.tags) this.value.tags = [];
      if (!this.value.termRef) this.value.termRef = 'any';
      if (this.value.strict === undefined) this.value.strict = false;
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/partials/colours";

  .blog-search {
    div {
      display: inline-block;
    }
  }

  input[type=text], select {
    border: none;
    border-bottom: 1px solid mclighten($grey);
    padding: 2px 5px;
    font-family: Inconsolata, monospace;
    font-size: 1em;
    box-sizing: border-box;

    height: 25px;

    &:focus {
      outline: none;
      border-bottom: 2px solid mclighten($grey);
    }
  }

  select {
    background-color: inherit;
    option {
      &:focus {
        outline: none;
      }

      &:hover {
        outline: none;
        background-color: mclighten($grey);
      }
    }
  }

  .clear-search {
    border: none;
    box-sizing: border-box;
    font-size: 1em;
    font-family: Inconsolata, monospace;
    background-color: inherit;

    div {
      padding: 2px 5px;
    }

    &:focus {
      outline: none;
    }

    &:hover {
      transition: font-weight;
      transition-duration: 0.2s;
      font-weight: bold;
    }
  }

</style>
