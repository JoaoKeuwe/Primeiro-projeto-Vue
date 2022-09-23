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
      this.nome = "Keuwe";
    }, 2000);
  },
  mounted() {
    this.nome = "Ojo";
  },
};
</script>
