const verCarrito = document.getElementById("ver-carrito")
const listContainer = document.getElementById ("list-cart")
const cartCounter = document.getElementById("cart-counter")
let cart = JSON.parse(localStorage.getItem("cartProducts")) || [] 
 //LISTA DE PRODUCTOS
  const finalCart = () =>{
    listContainer.style.display ="flex"
    listContainer.innerHTML = ""
 
  const listCart = document.createElement ("div")
  listCart.className ="list-cart-header" 
  listCart.innerHTML = `<h2 class="cart-header-title">Carrito</h2>`
   listContainer.appendChild(listCart);

   const listButton = document.createElement("div")
   listButton.className = "list-cart-button"
   listButton.innerText = "❌"
   listContainer.appendChild(listButton)

   listButton.addEventListener("click", ()=>{
    listContainer.style.display ="none"
    
   })

if (cart.length > 0){
   cart.forEach ((producto) =>{
      let cartContent = document.createElement("div")
      cartContent.className= "productos-carrito"
       cartContent.innerHTML = `<img src ="${producto.Imagen}">
                                <h3> ${producto.Nombre}</h3>
                                <p> $${producto.Precio} </p> 
                                <button class="plus-button"> + </button>
                                <p> Cantidad ${producto.Cantidad} </p>
                                <button class ="minus-button"> - </button>
                                <span class = "eliminarProducto" > 🗑 </p>
                                <p> Total :$${producto.Cantidad * producto.Precio}</p>`
 
     listContainer.appendChild(cartContent)
   

     //CONTADOR DE PRODUCTOS
let sumar = cartContent.querySelector(".plus-button")
sumar.addEventListener("click", () => {
  producto.Cantidad++
  finalCart()
  cartLs()
  displayCartCounter()
} )

let restar = cartContent.querySelector(".minus-button")
restar.addEventListener("click", () =>{
  if( producto.Cantidad !==1){
    producto.Cantidad --
  }
finalCart()
cartLs()
displayCartCounter()
})
//ELIMINAR PRODUCTO
let eliminar = cartContent.querySelector(".eliminarProducto")
eliminar.addEventListener ("click", () =>{
  eliminarProducto(producto.id)
})
    })  
     //VACIAR CARRITO
     const vaciarCarritoTotal = document.createElement("button")
     vaciarCarritoTotal.className = "Vaciar-carrito"
     vaciarCarritoTotal.innerText = "vaciar carrito"
     vaciarCarritoTotal.addEventListener("click", ()=>{
       cart = []
       cartLs()
       finalCart()
     })
     listCart.appendChild(vaciarCarritoTotal)
//COMPRA FINAL
    const compraFinalizada = document.createElement("button")
    compraFinalizada.innerText = "Finalizar compra"
    compraFinalizada.addEventListener("click", finalCart)
    listContainer.appendChild(compraFinalizada)
    
    compraFinalizada.addEventListener("click", ()=>{
   
      Swal.fire ({
        position: "top-end",
        icon: "success",
        title: "Compra finalizada",
        text: "Te avisaremos cuando tu compra este en camino",
        showConfirmButton: false,
        timer: 2000
      });
   listContainer.innerHTML =""
  cart = []
    })
 
   //TOTAL
    const total = cart.reduce((acc,el) => acc + el.Precio * el.Cantidad, 0)
    const compraTotal = document.createElement("div")
    compraTotal.className = "totalapagar"
    compraTotal.innerHTML =  `total a pagar: $${total}`
    listContainer.appendChild(compraTotal)

} 

else{
  const warninggText = document.createElement("h2")
  warninggText.innerText = "El carrito esta vacio"
  listContainer.appendChild(warninggText)
}
}
  verCarrito.addEventListener("click", finalCart)

  const eliminarProducto = (id) =>{
    const foundId =cart.find((el) => el.id === id)
    cart =cart.filter((cartId) => {
      return cartId !== foundId
    })
    finalCart()
    cartLs()
    displayCartCounter()
  }
  
const displayCartCounter = () =>{
  const cartNumber  = cart.reduce((acc,el) => acc + el.Cantidad, 0)
cartCounter.innerText = cartNumber

}




