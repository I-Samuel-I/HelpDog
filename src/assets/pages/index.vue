<template>
  <main data-aos="fade-up">
    <Header />
    <Mid />
    <Food />
  </main>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "../components/header/index.vue";
import Mid from "../components/mid/index.vue";
import Food from "../components/food/index.vue";

export default {
  name: "Home",
  components: {
    Header,
    Mid,
    Food,
  },
  mounted() {
    AOS.init({
      duration: 2000,
      once: true,
    });
  },
};
</script>
