new Vue({
    el: '#app',
    data: { bulb: true },
    methods: {
      toggleBulb() { 
          this.bulb = !this.bulb;
         }
    }
  });