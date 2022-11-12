const myNameApp = {
  data() {
    return {
      name: "",
      input_model: "",
    };
  },
  methods: {
    submitForm(e) {
      e.preventDefault();
      this.name = this.input_model;
    },
  },
};

Vue.createApp(myNameApp).mount("#app");
