// Calcular edad del usuario
function calcEdad(añoActual, añoNacimiento) {
    return añoActual - añoNacimiento
}

// Preguntar costo del producto
function preguntarCosto() {
    return Number(prompt('¿Cuánto sale lo que querés comprar? \nIngresá solo el número.'))
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
let exit;


// Condicional para acceder al sitio u obtener descuentos dependiendo de la edad
if (edadUsuario < 18) {

    alert('Lo siento, no puedes acceder al sitio.')

} else if (edadUsuario < 60) {
    alert('Bienvenido al sitio');

    do {
        let precioProducto = preguntarCosto();
        let precioFinal = calcIva(precioProducto, iva) + precioProducto;
        alert('El precio es de: ' + precioProducto + '\nEl costo total más iva es de ' + '$' + precioFinal + '\nGracias por tu compra! :)')
        exit = prompt('¿Queres seguir comprando? \nDigita cualquier tecla para seguir. \nDigita ESC para salir.').toUpperCase()
    } while (exit != 'ESC')

} else if (edadUsuario < 110) {

    do {
        let precioProducto = preguntarCosto();
        alert('Felicidades! Por tener 60 o más no pagás IVA! \nEl precio total es de:  ' + '$' + precioProducto)
        exit = prompt('¿Querés seguir comprando? \nDigita cualquier tecla para seguir. \nDigita ESC para salir.').toUpperCase()
    } while (exit != 'ESC')

} else {
    alert('Epaa, ¿Tenés la fuente de la juventud?, pasa el pique.')
}