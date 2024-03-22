const containerProducts = document.getElementById("products-container")


fetch("./db/data.json")
  .then(response => response.json())
  .then(data => {
    data.forEach((producto) => {
      const contenedor = document.createElement("div")
      contenedor.className = "container"
      contenedor.innerHTML = `<h3> ${producto.Nombre}</h3>
                                <img src="${producto.Imagen}">
                                <p> ${producto.Descripcion}</p>
                                <p class = "price"> $${producto.Precio} </p> `
      containerProducts.appendChild(contenedor)

      let agregar = document.createElement("button")
      agregar.innerText = "Comprar"
      agregar.className = "comprar"
      contenedor.appendChild(agregar)
      agregar.addEventListener("click", () => {

        Toastify({
          text: "agregado al carrito",
          duration: 3000,
          destination: "https://github.com/apvarun/toastify-js",
          newWindow: true,
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "right", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "linear-gradient(to right, #E178C5, #E1AFD1)",
          },
          onClick: function () { } // Callback after click
        }).showToast();

        const repeat = cart.some((repeatProducto) => repeatProducto.id === producto.id)

        if (repeat) {
          cart.map((prod) => {
            if (prod.id === producto.id) {
              prod.Cantidad++
              displayCartCounter()
            }
          })
        } else {
          cart.push({
            id: producto.id,
            Nombre: producto.Nombre,
            Imagen: producto.Imagen,
            Precio: producto.Precio,
            Cantidad: producto.Cantidad
          })
          cartLs()
          displayCartCounter()
        }
      })


    })
  }
  )
const cartLs = () => {
  localStorage.setItem("cartProducts", JSON.stringify(cart))
}
