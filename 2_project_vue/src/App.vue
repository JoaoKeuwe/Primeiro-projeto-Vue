<template>
  <div>
    <Header />
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
import Header from "./components/header.vue";

export default {
  name: "App",
  components: {
    FirstComponentVue,
    FirstComponent,
    SecondComponent,
    LifeCycleVue,
    Pessoa,
    Header,
  },
};
</script>

<style>
  body {
    background-color: #333;
    color: #fff;
  }
  img {
    width: 200px;
  }
  a {
    color: rgb(0, 153, 255)
  }

  .github {
    color: brown;
    background-color: black;
  }
</style>
