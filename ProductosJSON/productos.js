let fs = require('fs'); //file system //! sistema de archivos(metodos y estructuras de datos). Si queremos leer un archivo de texto que tenemos en local simplemte usaremos ese módulo para extraer el contenido del fichero, indicando su ruta y otra serie de parámetros que ahora describiremos.

let moduloProductos = {
    archivo: './productos.json', //indica donde esta ubicado el archivo .json
    leerJSON: function() {
        let listaProductosJSON = fs.readFileSync(this.archivo, 'utf-8'); //lee el archivo .json
        let listaProductos = JSON.parse(listaProductosJSON) //analiza una cadena y devuelve un objeto JavaScript. //!recibe JSON parseado

        return listaProductos; //retorna el json en forma de objeto listo apra trabajar.
    },
    guardarJSON: function(info) {
        let productosActualizados = JSON.stringify(info); //convierte un objeto o valor de JavaScript en una cadena de texto JSON, opcionalmente reemplaza valores si se indica.
        fs.writeFileSync(this.archivo, productosActualizados, 'utf-8'); //guarda/sobreescribe el archivo .json
    },


    cambiarPrecio: function(id, precio) {
        let listaProductos = this.leerJSON(); //lee el json

        listaProductos.forEach(producto => {
            if (producto.id == id) {
                producto.price = precio
            }
        })

        this.guardarJSON(listaProductos); //sobreescribe el json
    },
    eliminar: function(id) {
        let listaProductos = this.leerJSON();

        let listaActualizada = listaProductos.filter(producto => {
            return producto.id != id;
        })

        this.guardarJSON(listaActualizada);
    },
    agregarProducto: function(idNuevo, nombre, precioNuevo) {
        let listaDeProductos = this.leerJSON();

        let nuevoProducto = {
            id: idNuevo,
            name: nombre,
            price: precioNuevo
        }
        listaDeProductos.push(nuevoProducto)

        this.guardarJSON(listaDeProductos)
        return console.log('TU TAREA HA SIDO AGREGADA CON ÉXITO')
    },
    filtrar: function(filtro) {
        let listaDeProductos = this.leerJSON();
        let productoFiltrado = listaDeProductos.filter(producto => {
            return producto.name === filtro
        });
        return productoFiltrado
    }

}

module.exports = moduloProductos; //transforma el archivo en modulo