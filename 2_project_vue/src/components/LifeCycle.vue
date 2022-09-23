<template>
  <h1>Meu nome é: {{ nome }}</h1>
</template>

<script>
export default {
  name: "LifeCycle",
  data() {
    return {
      nome: "João",
    };
  },
  created() {
    setTimeout(() => {
      this.nome = "Vitor";
    }, 2000);
  },
  mounted() {
    setTimeout(() => {
      this.nome = "Keuwe";
    }, 3000);
  },
};
</script>
