const vm = new Vue({
    el: '#app',
    data() {
        return {
            title: 'Anos necessários para que Juca seja maior que Chico',
            peoples: [{
                    name: 'Chico',
                    height: 1.50,
                    perYear: 0.02,
                },
                {
                    name: 'Juca ',
                    height: 1.10,
                    perYear: 0.03,
                },

            ],
        };
    },
    computed: {
        calculateHeight() {
            let newHeightChico = this.peoples[0].height;
            let newHeightJuca = this.peoples[1].height;
            let years = 0;

            while (newHeightJuca < newHeightChico) {
                newHeightChico += this.peoples[0].perYear;
                newHeightJuca += this.peoples[1].perYear;
                years++;
            }
            return years;
        },
    },
});