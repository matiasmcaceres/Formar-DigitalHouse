const fs = require('fs');

module.exports = {
    bd : './data/movies.json',
    leerJSON : function(){
        return JSON.parse(fs.readFileSync(this.bd,'utf-8'));
    }, 
    totalPelis : function(){
        let cartelera = this.leerJSON()
        let pelis = cartelera.movies.length

        return pelis
    },

    cartelera : function (){
        let cartelera = this.leerJSON()
        

        let peliculas = cartelera.movies.map(function(movie){

            return `  \n\n\n ${movie.title}\n\n ${movie.overview}   `

        })
    
        return peliculas.sort()


    }
}