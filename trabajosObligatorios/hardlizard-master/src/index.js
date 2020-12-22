//Requeridos
const homePage = require('./homePage')
const enCartelera = require('./enCartelera')
const contacto = require('./contacto')
const masVotadas = require('./masVotadas')
const sucursales = require('./sucursales')
const preguntasFrecuentes = require('./preguntasFrecuentes')


//Mas Votadas
let formula = masVotadas.promedio()
let pelis = masVotadas.totalPeliculas()
let pelisFiltradas = masVotadas.peliculasFiltradas()

// Home Page
let movies = homePage.peliculas()

// En Cartelera
let totalPelis = enCartelera.totalPelis()
let pelistotal = enCartelera.cartelera()

//Preguntas Frecuentes
let totalPreguntas = preguntasFrecuentes.totalPreguntas()

let listaP = preguntasFrecuentes.listaPreguntas()

//Sucursales
let sucursal = sucursales.funcionArray()
let totalDeSalas = sucursales.totalDeSalas()


module.exports = {
    homePage: function (req, res) {
        res.write("   ➤ Bienvenidos a DH Movies el mejor sitio para encontrar las mejores peliculas, incluso mucho mejor que Netflix, Cuevana y PopCorn")
        res.write(`\n\n\n\n`)
        res.write("   ⧐ Con un total de " + movies.length + ' peliculas')
        res.write('\n\n')
        movies.forEach(movie => {
            res.write('        ⦁ ' + movie + '\n\n')
        });
        res.write(`\n\n\n\n`)
        res.write(`   ⧐ Recorda que podes visitar las secciones :
        \n
        ⦁ En Cartelera'
        \n
        ⦁ Mas Votadas
        \n
        ⦁ Sucursales
        \n
        ⦁ Contacto
        \n
        ⦁ Preguntas Frecuentes
        \n\n`)
        res.end()
    },

    enCartelera: function (req, res) {
        res.write(`/*/*En Cartelera/*/* \n\n\n Total de peliculas ${totalPelis} \n\n ${pelistotal}`)

    },

    contacto: function (req, res) {
        res.end(`Contacto\n\n ${contacto}`);
    },

    masVotadas: function (req, res) {
        res.end(`/*/* Mas Votadas /*/* \n\n **Total peliculas** ${pelis}  -Promedio- ${formula} \n\n ${pelisFiltradas}`);

    },

    sucursales: function (req, res) {
        res.write('Nuestras Salas');
        res.write('\n\n')
        res.write('Total de salas = ' + totalDeSalas)
        res.write('\n\n')
        res.write(" " + sucursal)
        res.end()
    },
    preguntasFrecuentes: function (req, res) {
        res.write(" TOTAL DE PREGUNTAS : " + totalPreguntas)
        res.write("-" + listaP)
        res.end()

    }
}