// Calcular edad del usuario
function calcEdad(añoActual, añoNacimiento) {
    return añoActual - añoNacimiento
}

// Preguntar nombre del producto
function preguntarProducto() {
    return prompt('¿Qué quiere comprar?');
}

// Preguntar costo del producto
function preguntarCosto() {
    return Number(prompt('¿Cuál es el costo?'))
}

// Calcular el Iva
function calcIva(precioProducto, iva) {
    return precioProducto * iva;
}

let añoNacimiento = Number(prompt('Hola! \n¿En que año naciste?'))
let fecha = new Date();
let añoActual = fecha.getFullYear();
let edadUsuario = calcEdad(añoActual, añoNacimiento)
let iva = 0.21;
let total= 0;
let exit;

// Condicional para acceder al sitio u obtener descuentos dependiendo de la edad
if (edadUsuario < 18) {

    alert('Lo siento, no puedes acceder al sitio.')

} else if (edadUsuario < 60) {
    alert('Bienvenido al sitio');

    do {
        let nombreProducto = preguntarProducto();
        let precioProducto = preguntarCosto();
        let precioFinal = calcIva(precioProducto, iva) + precioProducto;
        total = total + precioFinal;
        alert('El precio de ' + nombreProducto + ' es de ' + '$' + precioProducto + '\nEl costo + iva es de ' + '$' + precioFinal + '\n\n\n El precio total de su compra es de: ' + '$' + total)
        exit = prompt('¿Desea seguir comprando? \nDigite cualquier tecla para seguir. \nDigite ESC para salir.').toUpperCase()
    } while (exit != 'ESC')

} else if (edadUsuario < 110) {

    do {
        let precioProducto = preguntarCosto();
        total = total + precioProducto;
        alert('¡Felicidades, por tener 60 años o más no paga Iva! \nEl precio de su producto es de:  ' + '$' + precioProducto + '\n\nEl precio total de su compra es de ' + '$' + total)
        exit = prompt('¿Desea seguir comprando? \nDigite cualquier tecla para seguir. \nDigite ESC para salir.').toUpperCase()
    } while (exit != 'ESC')

} else {
    alert('Epaa, ¿Tenés la fuente de la juventud?, pasa el pique.')
}