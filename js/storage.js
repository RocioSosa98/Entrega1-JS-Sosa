let cartStorage = localStorage.getItem("cartProducts")
cartStorage = JSON.parse(cartStorage)

let cartShopping = document.getElementById("cart-box")

function renderCarrito (cartItems){
    cartItems.forEach (producto => {
        const carrito = document.createElement("div")
        carrito.innerHTML = ` <h3> ${producto.Nombre}</h3>
                              <h4> $${producto.Precio} </h4> `
          cartShopping.appendChild(carrito)
    })
}
renderCarrito(cartStorage)
