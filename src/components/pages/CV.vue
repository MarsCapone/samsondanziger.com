<template>
    <div class="cv">
      <p><a href="/static/files/samson-danziger-cv.pdf" target="_blank">download</a></p>
      <pdf v-for="i in numPages" :src="src" :key="i" :page="i"></pdf>
    </div>
</template>

<script>

  import pdf from 'vue-pdf'

  export default {
    name: "cv",
    data () {
      return {
        src: pdf.createLoadingTask('/static/files/samson-danziger-cv.pdf'),
        numPages: undefined
      }
    },
    mounted () {
      this.src.then(pdf => {
        this.numPages = pdf.numPages;
      })
    },
    components: {
      pdf
    }
  }
</script>

<style>
  .cv {
    width: 70%;
    margin: auto;
  }
</style>
