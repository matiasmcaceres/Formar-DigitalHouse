let fs = require('fs');

let moduloUsuarios = {
    archivo: './usuarios.json',
    leerJSON: function() {
        let listaUsuariosJSON = fs.readFileSync(this.archivo, 'utf-8');
        let listaUsuarios = JSON.parse(listaUsuariosJSON);

        return listaUsuarios;
    },
    guardarJSON: function(info) {
        let todosLosUsuarios = JSON.stringify(info);
        fs.writeFileSync(this.archivo, todosLosUsuarios, 'utf-8');
    },
    nuevoRegistro: function(nombreNuevo, emailNuevo, contraseñaNueva) {
        let listaDeUsuarios = this.leerJSON();

        let nuevoUsuario = {
            nombre: nombreNuevo,
            email: emailNuevo,
            contraseña: contraseñaNueva
        };
        listaDeUsuarios.push(nuevoUsuario);

        this.guardarJSON(listaDeUsuarios);
    },
    inicioSesion: function(email, contraseña) {
        let listaDeUsuarios = this.leerJSON();

        let usuario = listaDeUsuarios.filter(usuarios => {
            return usuarios.email == email && usuarios.contraseña == contraseña;
        })
        return usuario


        // listaDeUsuarios.forEach(function(usuarios) {
        //     if (usuarios.email == email && usuarios.contraseña == contraseña) {
        //         console.log("Sesion iniciada");
        //     } else if(usuarios.email != email || usuarios.contraseña != contraseña) {
        //         console.log("bobo");
        //     }
        // })
    },
    eliminar: function(emailE, contraseñaE) {
        let listaDeUsuarios = this.leerJSON();

        let listaActualizada = listaDeUsuarios.filter(usuario => {
            return usuario.email != emailE && usuario.contraseña != contraseñaE
        });

        this.guardarJSON(listaActualizada);
    }
}

module.exports = moduloUsuarios;