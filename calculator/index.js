var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
    num1: 0,
    num2: 0,
    num3: 0,
    result: 0
  },
  methods: {
    computeSum: function() {
      console.log('i am in compute sum');
      console.log("num1");
      console.log(this.num1);
      console.log(this.num2);
      console.log(this.num3);
      console.log(parseInt(this.num1) + parseInt(this.num2) + parseInt(this.num3));
      this.result = parseInt(this.num1) + parseInt(this.num2) + parseInt(this.num3);
    }
  }
});



// click the button and run some code -- DONE

// gather all the data from the inputs
// print that out

// do the math

// take the sum and show the user
