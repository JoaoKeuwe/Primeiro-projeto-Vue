<template>
  <div>
    <p v-if="esta_trabalhando">Estou trabalhando no momento</p>

    <p v-else>Estou utilizando essas linguagens em Backend</p>

    <ul>
      <li v-for="(technology, index) in backend_tecnologias" v-bind:key="index">
        {{ technology }}
      </li>
    </ul>

    <p>Utilizo essas linguagens em Front-end</p>

    <ul>
      <li v-for="technology in frontend_tecnologias" :key="technology.id">
        {{ technology.language }}
      </li>
    </ul>

    <div>
      <button @click="show_email">{{ text_button }}</button>
    </div>

    <p v-show="mostrar_email">Mande uma mensagem para {{ email }}</p>

    <p class="github">
      Para acessar meu porrtifólio
      <a v-bind:href="meu_link" target="blank"> Basta clicar aqui</a>
    </p>

    <Picture />

    <p v-if="2 < 4">test</p>
  </div>
</template>

<script>
import Picture from "./picture.vue";

export default {
  name: "Info",
  components: {
    Picture,
  },
  data() {
    return {
      esta_trabalhando: true,
      mostrar_email: false,
      email: "joaov2872@hotmail.com",
      meu_link: "https://github.com/JoaoKeuwe",
      text_button: "Mostrar E-mail",
      backend_tecnologias: ["Javascript", "PHP", "Vue"],
      frontend_tecnologias: [
        { id: 1, language: "HTML" },
        { id: 2, language: "css" },
        { id: 3, language: "Vue" },
      ],
    };
  },
  methods: {
    show_email() {
      this.mostrar_email = !this.mostrar_email;
      if (!this.mostrar_email) {
        this.text_button = "Mostrar E-mail";
      } else {
        this.text_button = "Ocutar Email";
      }
    },
  },
};
</script>
