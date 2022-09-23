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
    this.nome = "Keuwe"
  },
  mounted() {
    this.nome = "Ojo"
  }

};
</script>
