<template>
  <main>
    <Header/>
    <Mid/>
    <Food/>
  </main>
</template>

<script> 
import Header from "../components/header/index.vue"
import Mid from "../components/mid/index.vue"
import Food from "../components/food/index.vue"
export default {
   
  name: "Home", 
  components: {
    Header,
    Mid,
    Food
  },
};
</script>
