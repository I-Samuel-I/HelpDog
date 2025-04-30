<template>
  <header>
    <section>
      <h3 class="Logo">
        <img src="../../images/patas.png" />
        HelpDog
      </h3>
      <h1>Ajude quem realmente precisa da sua ajuda</h1>
      <p>Com apenas 1 real você pode me ajudar a alimentar cães de ruas</p>
      <button>Ajudar agora</button>
    </section>
    <figure>
      <div class="Dog-banner">
        <div class="Rotate-bg"></div>
        <img src="../../images/dog-1.png" alt="Cachorrinho" class="Dog-img" />
      </div>
    </figure>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped lang="scss">
@use "./style.scss";
</style>
