const fs = require('fs');


module.exports = {
    leerJSON: function () {
        let theatersJSON = fs.readFileSync('./data/theaters.json', 'utf-8');
        let theatersParseado = JSON.parse(theatersJSON);
        return theatersParseado
    },
    funcionArray: function () {
        let sucursales = this.leerJSON()
        let arraySucursales = sucursales.theaters.map(theaters => {
            return "Sucursal: " + theaters.name + "\n Dirección: " + theaters.address + "\n \n"

        });
        return arraySucursales.join(" ")
    },
    totalDeSalas: function(){
        let sucursales = this.leerJSON()
        let totalSalas = sucursales.theaters.length
        return totalSalas
    }


}