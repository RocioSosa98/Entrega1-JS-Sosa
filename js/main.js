
const productos = [
   {
      Nombre: "crema hidratante",
      Precio: 1000
   },
   {
      Nombre: "perfume",
      Precio: 1500
   },
   {
      Nombre: "serum",
      Precio: 2000
   },
   {
      Nombre: "protector solar",
      Precio: 2500
   },

];
// console.log(productos)

let carrito  = []

 let nombreUsuario = prompt("Bienvenido ingrese su nombre");
 
function saludar (nombreUsuario){
let Bienvenido = nombreUsuario
}
saludar(nombreUsuario)

let confirmacion = prompt("Hola!!! "+  nombreUsuario  +  " desea comprar algun producto. SI/NO").toLowerCase()


while (confirmacion != "si" && confirmacion != "no") {
   alert("INCORRECTO, ingrese si o no")
   confirmacion = prompt("Desea comprar algun producto?")
}
if (confirmacion == "si") {
   alert("Esta es nuestra lista de productos")
   productos.forEach((producto) => {
      alert(producto.Nombre + " " + producto.Precio + " $ ");
   })
}
else if (confirmacion == "no") {
   alert("Gracias, vuelva pronto..")
}

while (confirmacion != "no") {
   let producto = (prompt("Elegi el producto que quieras comprar  "))

   if (producto == "crema hidratante" || producto == "perfume" || producto == "serum" || producto == "protector solar") {

      switch (producto) {
         case "crema hidratante":
            Precio = 1000;
            break
         case "perfume":
            Precio = 1500;
            break
         case "serum":
            Precio = 2000;
            break
         case "protector solar":
            Precio = 2500;
            break;
         default:
            break;
      }
      unidades = parseInt(prompt("Cuantas unidades vas a comprar?"))

      carrito.push({producto, unidades, Precio })
      console.log(carrito)
   } else {
      alert("No se encuentran resultados")
   }
   confirmacion = prompt("Quiere algun otro producto?")
   if (confirmacion == "no"){
      alert("Gracias por su compra")
     
   }
}



