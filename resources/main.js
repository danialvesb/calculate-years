const vm = new Vue({
    el: '#app',
    data() {
        return {
            title: 'Anos necessários para que Juca seja maior que Chico',
            peoples: [
                {
                    name: 'Chico',
                    height: 1.50,
                    perYear: 0.02,
                },
                {
                    name: 'Juca ',
                    height: 1.10,
                    perYear: 0.03,
                }

            ]
        };
    },
    methods: {
        calculateHeightIncrement() {
            console.log('oi')
        },
     }
})