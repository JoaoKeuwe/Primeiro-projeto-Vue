<template>
  <form action="" @submit="enviarForm($event)">
    <InputText />
    <ButtonSubmit />
  </form>
</template>

<script>
import InputText from "./forms/InputText.vue";
import ButtonSubmit from "./forms/submit.vue";
export default {
  name: "Form",
  components: {
    InputText,
    ButtonSubmit,
  },
  methods: {
    enviarForm(e) {
      e.preventDefault();
      console.log("chegou aqui")
    }
  }
};
</script>
