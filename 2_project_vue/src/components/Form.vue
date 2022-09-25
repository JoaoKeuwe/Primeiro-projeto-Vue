<template>
  <form action="">
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
};
</script>
