<template>
  <div>
    <p v-if="esta_trabalhando">Estou trabalhando no momento</p>
    <p v-else>Estou utilizando essas linguagens</p>

    <ul>
      <li>MYSQL</li>
      <li>PHP</li>
      <li>REACT</li>
    </ul>

    <p v-show="mostrar_email">Mande uma mensagem para {{ email }} </p>
    <p v-if="2<4"> test</p>
  </div>
</template>

<script>
export default {
  name: "Info",
  data() {
    return {
      esta_trabalhando: true,
      mostrar_email: true,
      email:'joaov2872@hotmail.com'
    }
  },
};
</script>
