let moduloUsuarios = require('./usuarios');

let process = require('process');
let comando = process.argv[2];

switch (comando) {
    case 'listar':
        let usuarios = moduloUsuarios.leerJSON();

        console.log('------------------');
        console.log("Lista de Usuarios");
        console.log('------------------');

        usuarios.forEach(usuario => {
            console.log('Nombre: ' + usuario.nombre + ' Email: ' + usuario.email + ' Contraseña: ' + usuario.contraseña)
        })
        break;
    case "registro":
        let nombreNuevo = process.argv[3];
        let emailNuevo = process.argv[4];
        let contraseñaNueva = process.argv[5];
        let listaDeUsuarios = moduloUsuarios.leerJSON();
        let buscador = JSON.stringify(listaDeUsuarios)

        if (buscador.indexOf(process.argv[4]) == -1) {
            if (emailNuevo.includes('@') == true) {
                moduloUsuarios.nuevoRegistro(nombreNuevo, emailNuevo, contraseñaNueva)
                console.log("Usuario creado correctamente!!. " + nombreNuevo + " ya puedes iniciar sesion.");
                break;
            } else {
                console.log("El email debe contener '@'");
                break;
            }
        } else {
            console.log("Ya se ha creado un usuario con ese email")
            break;
        }

    case "login":
        let email = process.argv[3];
        let contraseña = process.argv[4];

        let resultado = moduloUsuarios.inicioSesion(email, contraseña)
        if (resultado.length == 1) {
            console.log("Sesion Inicada. " + email + " bienvenido")
        } else {
            console.log("No encontramos un usuario con estas credenciales")
        };
        break;
    case "eliminar":
        let emailE = process.argv[3]
        let contraseñaE = process.argv[4]
        let buscar = moduloUsuarios.inicioSesion(emailE, contraseñaE)


        if (buscar.length == 1) {
            moduloUsuarios.eliminar(emailE, contraseñaE)
            console.log("Usuario eliminado correctamente");
        } else {
            console.log("No encontramos un usuario con esas credenciales");
        }



}