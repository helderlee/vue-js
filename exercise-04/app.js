new Vue({
  el: '#exercise',
  data: {
    attachHighlight: false,
    attachBlue: true,
    attachRed: true,
    attachGreen: true,
    counter: 0,
    color: '',
    firstClass: 'square',
    secondClass: '',
    viewSecondClass: 'false',
    styleBackgroundColor: '',
    progress: 0
  },
  computed: {
    effectClass: function () {
      return {
        highlight: this.attachHighlight,
        shrink: !this.attachHighlight
      }
    },
    progressWidth: function () {
      return this.progress + 'px';
    }
  },
  watch: {
    viewSecondClass: function (value) {
      if (value == 'true') {
        this.secondClass = 'red-background';
      } else {
        this.secondClass = '';
      }
    }
  },
  methods: {
    startEffect: function () {
      setInterval(function () {
        this.attachHighlight = !this.attachHighlight;
        this.counter++;
        this.attachBlue = false;
        this.attachGreen = false;
        this.attachRed = false;
        var remainder = this.counter % 3;
        if (remainder == 0) {
          this.attachBlue = true;
        } else if (remainder == 1) {
          this.attachGreen = true;
        } else {
          this.attachRed = true;
        }
      }.bind(this), 1000);
    },
    startProgress: function () {
      setInterval(function () {
        this.progress += 10;
        if (this.progress > 200) {
          this.progress = 0;
        }
      }.bind(this), 1000);
    }
  }
});
