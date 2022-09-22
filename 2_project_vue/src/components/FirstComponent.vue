<template>
  <div>
    <h1>olá vue</h1>
    <p>Meu nome é {{ nome }}</p>
    <form >
      <p>{{input}}</p>
    </form>
    <input
          type="text"
          v-model="input"
          placeholder="Digite o seu nome"
        />
    <input type="submit" v-on:click="submit" />
  </div>
</template>

<script>
export default {
  name: "FirstComponent",
  data() {
    return {
      nome: "",
      input: ""
    };
  },
  methods: {
    submit(e) {
      e.preventDefault();
      this.nome = this.input;
    }
  },
};
</script>
