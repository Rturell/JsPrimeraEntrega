let usuario = prompt('Cómo te llamas?', 'Rodri');
let añoNacimiento = Number(prompt('Hola! \n¿Cuál es su año de nacimiento?', '1987'))

// validar que se ingrese un numero al prompt
while (añoNacimiento == null || /\D/.test(añoNacimiento) || añoNacimiento == "") {
    añoNacimiento = prompt("Entre un número válido: ");
};

let fecha = new Date();
let añoActual = fecha.getFullYear();
let edadUsuario = calcEdad(añoActual, añoNacimiento)
let iva = 0.21;


// Condicional para acceder al sitio u obtener descuentos dependiendo de la edad
if (edadUsuario < 18) {

    document.getElementById('alert').innerHTML = `<div id="alert" class="alert alert-primary"> ${usuario}, volvé cuando cumplas la mayoría de edad </div>`;

} else if (edadUsuario < 110) {

    class Product {
        constructor(id, name, description, price, quantity) {
            this.id = id;
            this.name = name;
            this.description = description;
            this.price = price;
            this.quantity = quantity;
        }

        productDescription() {
            return `\nID: ${this.id} \nNOMBRE: ${this.name} \nPRECIO: ${this.price}`
        }

        cartDescription() {
            return `ID: ${this.id} \n PRODUCTO: ${this.name} \n PRECIO: ${this.price} \n------------\n `
        }
    }

    class ProductController {
        constructor() {
            this.product = []
        }

        addProduct(product) {
            this.product.push(product);
        }

        removeProduct(product) {
            this.product.splice(product)
        }

        showProducts() {

            let productDescription = ""
            this.product.forEach(product => {
                productDescription = productDescription + product.productDescription() + "\n---------------------\n"
            })

            alert(`NUESTROS PRODUCTOS: \n ${productDescription}`)
        }

        searchProductId(id) {
            return this.product.find(product => product.id == id)
        }
    }

    class Cart {
        constructor() {
            this.cartList = [];
        }

        addProduct(productToBuy) {
            this.cartList.push(productToBuy)
        }

        showProducts() {

            let productsToBuy = ""
            let totalPrice = 0;
            this.cartList.forEach(product => {
                productsToBuy += product.cartDescription();
                totalPrice += product.price;
            });

            alert(`Su Carrito: \n ${productsToBuy} \n TOTAL: ${totalPrice}`)
        }
    }

    const productController = new ProductController();
    const cart = new Cart();

    productController.addProduct(new Product(0, 'Vino Blanco GARZÓN', 'Este Albariño fue cosechado en su punto justo de madurez,', 769))
    productController.addProduct(new Product(1, 'Vino Tinto ALAMOS', 'Se presenta un profundo color púrpura con matices negros.', 535))
    productController.addProduct(new Product(2, 'Vino Carmenere CONVENTO', 'Sin descripcion', 289))
    productController.addProduct(new Product(3, 'Vino Tinto Cabernet', 'Color Rojo rubí, con notas violáceas.', 298))
    productController.addProduct(new Product(4, 'Vino Pinot Rose', 'Con un delicado y tenue color rosado piel de cebolla', 490))

    rta = '';

    do {

        productController.showProducts();
        let userProductId = Number(prompt('Ingrese el Id del producto que quiere comprar'));
        let productToBuy = productController.searchProductId(userProductId)
        cart.addProduct(productToBuy);
        cart.showProducts()
        rta = prompt('Desea seguir comprando? \nPresiona cualquier tecla para seguir. \nEscriba "Esc" para salir.').toUpperCase();

    } while (rta !== 'ESC')

} else {
    alert('Epaa, ¿Tenés la fuente de la juventud?. Pasá el pique!')
}

//FUNCIONES

//Calcular edad del usuario
function calcEdad(añoActual, añoNacimiento) {
    return añoActual - añoNacimiento
}