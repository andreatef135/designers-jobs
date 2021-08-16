<template>
  <div class="about">
    <JobPage class="my-4" :id="id" />
    <h3>وظائف اخرى:</h3>
    <HelloWorld id="1" />
  </div>
</template>


<script>
import JobPage from '../components/JobPage.vue'
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Job",
      metaInfo: {
      title: 'My Example App',
      titleTemplate: '%s - Yay!',
      htmlAttrs: {
        lang: 'en',
        amp: true
      }
    },
  components: {
    JobPage,
    HelloWorld
  },
  props: ["id"],
}
</script>
