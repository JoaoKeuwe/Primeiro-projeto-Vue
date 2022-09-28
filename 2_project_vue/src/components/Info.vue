<template>
  <div>
    <p v-if="esta_trabalhando">Estou trabalhando no momento</p>
    <p v-else>Estou utilizando essas linguagens</p>

    <ul>
      <li>MYSQL</li>
      <li>PHP</li>
      <li>REACT</li>
    </ul>
    <div>
      <button @click="show_email">{{ text_button }}</button>
    </div>

    <p v-show="mostrar_email">Mande uma mensagem para {{ email }} </p>
    <p>Para acessar meu porrtifólio  <a v-bind:href="meu_link" target="blank"> Basta clicar aqui</a></p>
    <Picture />
    <p v-if="2<4"> test</p>
  </div>
</template>

<script>
  import Picture from "./picture.vue"
export default {
  name: "Info",
  components: {
    Picture
  },
  data() {
    return {
      esta_trabalhando: true,
      mostrar_email: false,
      email:'joaov2872@hotmail.com',
      meu_link: "https://github.com/JoaoKeuwe",
      text_button: 'Mostrar E-mail'
    }
  },
  methods: {
    show_email() {
      this.mostrar_email = !this.mostrar_email
      if(!this.mostrar_email) {
        this.text_button = 'Mostrar E-mail'
      }else {
        this.text_button = 'Ocutar Email'
      }
    }
  }
}

</script>
