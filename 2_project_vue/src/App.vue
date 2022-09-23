<template>
  <div>
    <FirstComponent />
    <SecondComponent />
    <LifeCycleVue />
  </div>
</template>

<script>
import FirstComponentVue from "./components/FirstComponent.vue";
import FirstComponent from "./components/FirstComponent.vue";
import SecondComponent from "./components/secondComponent.vue";
import LifeCycleVue from "./components/LifeCycle.vue";

export default {
  name: "App",
  components: {
    FirstComponentVue,
    FirstComponent,
    SecondComponent,
    LifeCycleVue,
},
};
</script>
