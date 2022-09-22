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


// const MyNameApp = {
//     data() {
//       return {
//         name: "",
//         input_name: ""
//       }
//     },
//     methods: {
//       submitForm(e) {
  
//         e.preventDefault()
  
//         console.log(this.input_name);
  
//         this.name = this.input_name;
  
//       }
//     }
//   }
  
//   Vue.createApp(MyNameApp).mount('#app')