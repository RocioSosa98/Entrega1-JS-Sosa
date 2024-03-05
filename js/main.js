const containerProducts = document.getElementById("products-container")
const verCarrito = document.getElementById("ver-carrito")
const cartShop = document.getElementById ("cart-shop")
let cart 
let cartLs = localStorage.getItem("cart")
if(cartLs){
   cart =JSON.parse(cartLs)
}else {
   cart =[]
}


function uploadProducts (productArray){
   productos.forEach((producto) =>{
      const contenedor = document.createElement("div")
      contenedor.className = "card"
      contenedor.innerHTML = `<h3> ${producto.Nombre}</h3>
                              <img src="${producto.Imagen}">
                              <p> ${producto.Descripcion}</p>
                              <h4> $${producto.Precio} </h4> 
                              <button class = "agregarProducto" id= "${producto.id}">Agregar</button>`
      containerProducts.appendChild(contenedor)
      })
      cardButton()
}
      uploadProducts(productos)

   
  function cardButton(){
   addButton = document.querySelectorAll(".agregarProducto")
   addButton.forEach(button =>{
      button.onclick = (el) =>{
       const productId = el.currentTarget.id
       const selectedProduct = productos.find(producto => producto.id ==productId)

       cart.push(selectedProduct)
       localStorage.setItem("cartProducts", JSON.stringify (cart))
      }
   })

   verCarrito.addEventListener("click", () =>{
      const cartContainer = document.createElement ("div")
       cartContainer.innerHTML = `<h1 class="cart-title"> cart.</h1>`
     
       cartShop.appendChild(cartContainer)
     
     })
   cart.forEach ((productos) =>{
      let carTContent = document.createElement("div")
      cart.innerHTML = ` <img src = "${producto.img}"
      <h3>${producto.nombre}</h3>
      <p>$${producto.precio} </p>`

      cartShop.appendChild(cartContent)
   })
}
 





//CONTADOR DE PRODUCTOS
let counter= document.getElementById("counter")
let sumar = document.getElementById("plus-button")
let restar =document.getElementById ("minus-button")
let contador = 0


sumar.onclick = () =>{
   contador ++
   counter.innerHTML = contador
   restar.disabled = false
}
 
restar.onclick = () =>{
   if (contador ===0) {
    restar.disable = true
 }  else {
         contador --
        counter.innerHTML = contador
   }
}
  




