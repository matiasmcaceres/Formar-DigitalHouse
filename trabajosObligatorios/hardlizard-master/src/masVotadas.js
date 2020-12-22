const fs = require('fs')

module.exports = {
    bd : './data/movies.json',
    leerJSON : function(){
        return JSON.parse(fs.readFileSync(this.bd,'utf-8'));
    },

    promedio : function(){ //Función Promedio de Ranting Total de Peliculas
        let movies = this.leerJSON()

        let movieSevenForUp = movies.movies.filter(function (movie) {
            return movie.vote_average >= 7;
        });
        
        let rankingPromedio = movieSevenForUp.map(function (ranking) {
            return ranking.vote_average;
        });
        
        let sumaRanking = rankingPromedio.reduce(function (acum, num) {
            return (acum + num);
        });
        
        let promedioRanking = sumaRanking / movieSevenForUp.length;
        
        let rankingDosDecimales = promedioRanking.toFixed(2);

        return rankingDosDecimales;

    },

    totalPeliculas : function(){ // Función Cantidad de Peliculas con Rating Mayor o Igual a 7
 
        let movies = this.leerJSON()

        let movieSevenForUp = movies.movies.filter(function (movie) {
            return movie.vote_average >= 7;
        });

        return movieSevenForUp.length

    },
    peliculasFiltradas : function(){ // Función Lista de Películas de Filtradas y Ordenadas por Rating
        let movies = this.leerJSON()
        let movieSevenForUp = movies.movies.filter(function (movie) {
            return movie.vote_average >= 7;
        });
        let peliculas = movieSevenForUp.map(function(movie){
            return ` \n\ ${movie.title} ${movie.vote_average} \n\ ${movie.overview} \n\ `
        })

        return peliculas.sort().join(" ")
   
    }}
