<template>
  <div>
    <FirstComponent />
    <SecondComponent />
    <LifeCycleVue />
    <Pessoa />
  </div>
</template>

<script>
import FirstComponentVue from "./components/FirstComponent.vue";
import FirstComponent from "./components/FirstComponent.vue";
import SecondComponent from "./components/secondComponent.vue";
import LifeCycleVue from "./components/LifeCycle.vue";
import Pessoa from "./components/Pessoa.vue";

export default {
  name: "App",
  components: {
    FirstComponentVue,
    FirstComponent,
    SecondComponent,
    LifeCycleVue,
    Pessoa,
  },
};
</script>
