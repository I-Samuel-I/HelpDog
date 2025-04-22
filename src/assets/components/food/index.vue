<template>
  <section>
    <div class="Cards">
      <figure v-for="card in cards" :key="card.img" class="card">
        <img :src="card.img" :alt="card.titleImg" />
        <figcaption>
          <h1>{{ card.title }}</h1>
          <p>{{ card.text }}</p>
          <button>{{ card.button }}</button>
        </figcaption>
      </figure>
    </div>
  </section>
</template>

<script>
import { cards } from "./script.js";

export default {
  name: "Food",
  data() {
    return {
      cards,
    };
  },
};
</script>
<style scoped lang="scss">
@use "./style.scss";
</style>
