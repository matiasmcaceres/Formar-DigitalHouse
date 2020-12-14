//! Par o impar
// Crear una función expresada que al recibir un numero como parametro imprima por consola “El número es par” si lo es, o “El número es impar” si no lo es. En el caso que el numero fuese 0 mostrar un mensaje de error. Se debe incluir un if ternario en script.



function parImpar(numero) {
    if (numero == 0) {
        return "error"
    }

    return numero % 2 == 0 ? "El número es par" : "El número es impar";

}

console.log(parImpar(0));
console.log(parImpar(1));
console.log(parImpar(2));