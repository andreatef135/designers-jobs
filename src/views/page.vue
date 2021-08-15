<template>
  <div class="new">
    <h3 class="mt-4">الصفحه رقم: {{id}}</h3>
    <HelloWorld :id="id"/>
  </div>
</template>


<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "page",
  props:["id"],
  components: {
    HelloWorld
  },
}
</script>
