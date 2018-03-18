new Vue({
    el: '#exercise',
    data: {
        value: ''
    },
    methods: {
        showAlert: function () {
            alert("Button clicked!");
        },
        onKeydown: function (event) {
            this.value = event.target.value;
        }
    }
});