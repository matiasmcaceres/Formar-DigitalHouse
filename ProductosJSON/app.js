let moduloProductos = require('./productos'); //llama al modulo para poder trabajar con el

let process = require('process'); //proporciona información y control sobre el proceso actual de Node.js
let comando = process.argv[2]; //La propiedad devuelve una matriz que contiene los argumentos de línea de comandos pasados cuando se inició el proceso Node.js

switch (comando) {

    case 'listar':
        let productos = moduloProductos.leerJSON(); //leemos el json q esta en el moduloProductos.

        console.log('------------------');
        console.log("Lista de productos");
        console.log('------------------');

        productos.forEach(producto => {
            console.log('id: ' + producto.id + ' Producto: ' + producto.name + ' Precio: ' + producto.price)
        })
        break;
    case 'cambiarPrecio':
        let id = process.argv[3]; //poner el numero de identificación del producto
        let precio = process.argv[4]; //poner precio del producto

        moduloProductos.cambiarPrecio(id, precio);

        console.log('--------------------------------');
        console.log('Producto modificado correctamente');
        console.log('--------------------------------');
        break;
    case 'eliminar':
        let idEliminar = process.argv[3];

        moduloProductos.eliminar(idEliminar);

        console.log('--------------------------------');
        console.log('Producto eliminado correctamente');
        console.log('--------------------------------');
        break;
    case "agregar":
        let idNuevo = process.argv[3];
        let nombre = process.argv[4];
        let precioNuevo = process.argv[5];
        moduloProductos.agregarProducto(idNuevo, nombre, precioNuevo)

        console.log('--------------------------------');
        console.log('Producto agregado correctamente');
        console.log('--------------------------------');
        break;
    case "filtrar":
        let filtro = process.argv[3]
        let productoFiltrado = moduloProductos.filtrar(filtro);
        productoFiltrado.forEach(function(producto) {
            console.log('id: ' + producto.id + ' Producto: ' + producto.name + ' Precio: ' + producto.price)
        })

}