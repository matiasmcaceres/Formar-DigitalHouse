const fs = require('fs')

const heroes = JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8'));

module.exports = {
  listar: (req, res) => {
    res.send(heroes)
  },
  detalles: (req,res) => {
    let id = req.params.idHeroe
    let heroe = heroes.filter((heroe) => {
      return heroe.id == id
    })
    heroe = heroe[0]

    if (heroe == undefined) {
      res.send('Este heroe no ha sido encontrado pruebe con otro ID')
    } else {
      res.send(`Hola mi nombre es ${heroe.nombre} y soy ${heroe.profesion}`)
    }
  },
  bio:(req,res) =>{
    let id = req.params.idHeroe
    let ok = req.params.ok
    let heroe = heroes.filter((heroe) => {
      return heroe.id == id
    })
    heroe = heroe[0]

    if (heroe == undefined) {
      return res.send('No encontramos un heroe para mostrarte la biografia')
    }
    if (ok == 'ok') {
      return res.send(`${heroe.nombre}: \n\n${heroe.resenia}`)
    } else {
      return res.send(`${heroe.nombre}: Lamento que no desees saber mas de mi`)
    }
  }
}