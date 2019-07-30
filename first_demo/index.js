/* global Vue */

var app = new Vue({
  el: "#app",
  data: {
    message: "Goodbye Vue!",
    name: "Brian",
    showInfo: true
  },
  methods: {
    changeMessage: function() {
      console.log('i am in the change message function');
      this.message = "Goobye";
    },
    toggleInfo: function() {
      console.log('i am in hide info');
      this.showInfo = !this.showInfo;
      // if (this.showInfo === true) {
      //   this.showInfo = false;
      // } else {
      //   this.showInfo = true;
      // }
    }
  }
});
