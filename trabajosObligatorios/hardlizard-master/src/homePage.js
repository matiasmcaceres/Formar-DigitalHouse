const fs = require('fs');

module.exports = {
    bd: './data/movies.json',
    leerJSON: function() {
        return JSON.parse(fs.readFileSync(this.bd, 'utf-8'));
    },
    ordenar: function() {
        let pelisOrdenadas = this.leerJSON()
        pelisOrdenadas.movies.sort(function(a, b) {
            if (a.title > b.title) {
                return 1;
            }
            if (a.title < b.title) {
                return -1;
            }
            return 0;
        });
        return pelisOrdenadas.movies
    },
    peliculas: function() {
        let pelis = this.ordenar().map(peli => {
            return peli.title
        })
        return pelis
    }

}