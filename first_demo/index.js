var app = new Vue({
  el: "#app",
  data: {
    message: "Goodbye Vue!",
    name: "Brian"
  },
  methods: {
    changeMessage: function() {
      console.log('i am in the change message function');
      this.message = "Goobye";
    }
  }
});
