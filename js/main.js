let añoNacimiento = Number(prompt('Hola! \n¿Cuál es su año de nacimiento?'))

// validar que se ingrese un numero al prompt
while (añoNacimiento == null || /\D/.test(añoNacimiento) || añoNacimiento == "") {
    añoNacimiento = prompt("Entre un número válido: ");
};

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
    alert('¡Bienvenido al sitio!');

    do {
        let nombreProducto = preguntarProducto();
        let precioProducto = preguntarCosto();
        let precioFinal = calcIva(precioProducto, iva) + precioProducto;
        total = total + precioFinal;
        alert('El precio de ' + nombreProducto + ' es de ' + '$' + precioProducto + '\nEl costo + iva es de ' + '$' + precioFinal + '\n\n\n El precio total de su compra es de: ' + '$' + total)
        exit = prompt('¿Desea seguir comprando? \nDigite cualquier tecla para seguir. \nDigite \"ESC\" para salir.').toUpperCase()
    } while (exit != 'ESC')

} else if (edadUsuario < 110) {

    alert('¡Bienvenido al sitio!');

    do {
        let nombreProducto = preguntarProducto();
        let precioProducto = preguntarCosto();
        total = total + precioProducto;
        alert('¡Felicidades! Por ser mayor de 60 años no paga Iva! \nEl precio de ' + nombreProducto + ' es de:  ' + '$' + precioProducto + '\n\nEl precio total de su compra es de ' + '$' + total)
        exit = prompt('¿Desea seguir comprando? \nDigite cualquier tecla para seguir. \nDigite \"ESC\" para salir.').toUpperCase()
    } while (exit != 'ESC')

} else {
    alert('Epaa, ¿Tenés la fuente de la juventud?. Pasá el pique!')
}

//FUNCIONES

// Calcular edad del usuario
function calcEdad(añoActual, añoNacimiento) {
    return añoActual - añoNacimiento
}

// Preguntar nombre del producto
function preguntarProducto() {
    return prompt('¿Qué desea comprar?', 'Vino');
}

// Preguntar costo del producto
function preguntarCosto() {
    return Number(prompt('¿Cuál es el costo?', 300))
}

// Calcular el Iva
function calcIva(precioProducto, iva) {
    return precioProducto * iva;
}