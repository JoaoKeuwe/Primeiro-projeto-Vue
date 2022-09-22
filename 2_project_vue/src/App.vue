<template>
  <div>
    <FirstComponent />
    <SecondComponent />
  </div>
</template>

<script>
import FirstComponentVue from "./components/FirstComponent.vue";
import FirstComponent from "./components/FirstComponent.vue";
import secondComponentVue from "./components/secondComponent.vue";
import SecondComponent from "./components/secondComponent.vue";
export default {
  name: "App",
  components: {
    FirstComponentVue,
    FirstComponent,
    secondComponentVue,
    SecondComponent,
  },
};
</script>
