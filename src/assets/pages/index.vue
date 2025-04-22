<template>
  <main>
    <Header/>
  </main>
</template>

<script> 
import Header from "../components/header/index.vue"
export default {
   
  name: "Home", // Nome do componente
  components: {
    Header
    // Aqui você registraria outros componentes, como o Header, se necessário
  },
};
</script>
