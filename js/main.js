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
  












// let confirmacion 
// let nombreUsuario 


// function saludar (nombreUsuario){
//    nombreUsuario = prompt("Bienvenido ingrese su nombre");
// confirmacion = prompt("Hola!!! "+  nombreUsuario  +  " desea comprar algun producto. SI/NO").toLowerCase()
// }
// saludar(nombreUsuario)

// while (confirmacion != "si" && confirmacion != "no") {
//    alert("INCORRECTO, ingrese si o no")
//    confirmacion = prompt("Desea comprar algun producto?")
// }
// if (confirmacion == "si") {
//    alert("Esta es nuestra lista de productos")
//    productos.forEach((producto) => {
//       alert(producto.Nombre + " " + producto.Precio + " $ ");
//    })
// }
// else if (confirmacion == "no") {
//    alert("Gracias, vuelva pronto..")
// }

// while (confirmacion != "no") {
//    let producto = (prompt("Elegi el producto que quieras comprar  "))

//    if (producto == "crema hidratante" || producto == "perfume" || producto == "serum" || producto == "protector solar") {

//       switch (producto) {
//          case "crema hidratante":
//             Precio = 1000;
//             break
//          case "perfume":
//             Precio = 1500;
//             break
//          case "serum":
//             Precio = 2000;
//             break
//          case "protector solar":
//             Precio = 2500;
//             break;
//          default:
//             break;
//       }
//       unidades = parseInt(prompt("Cuantas unidades vas a comprar?"))

//       carrito.push({producto, unidades, Precio })
//       console.log(carrito)
//    } else {
//       alert("No se encuentran resultados")
//       producto = (prompt("Elegi el producto que quieras comprar  "))
//    }
   

//    confirmacion = prompt("Quiere algun otro producto?")
//    if (confirmacion == "no"){
//       alert("Gracias por su compra")
     
//    }
//}



