let divProductos = document.getElementById("divProductos");
let mostrarCarrito = document.getElementById("mostrarCarrito");
let costo = 500;
const carrito = [];
let botonEnvio = document.getElementById("botonEnvio");

const suma = (carrito, costo) => carrito + costo;


fetch(`./productos.json`)
.then(response => response.json())
.then(ramos => {
  ramos.forEach((ramos) => {
    let {id, nombre, ramo, precio, flores} = ramos
    divProductos.innerHTML += `
    <div id="divProductos ${id}" class="productos">
      <h2> Nombre: ${nombre} </h2>
      <p> Tipo: ${ramo} </p>
      <p> Precio: ${precio} </p>
      <p> Flores: ${flores} </p>
      <button id= "boton${id}"> Sumar al carrito </button>
    </div>
  `
  })
  const productoElegido = ramos.forEach(ramos => {
    document.getElementById(`boton${ramos.id}`).addEventListener("click", () => {
      Toastify({
        text: "Agregado al carrito!",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #d961f7, #f128c2)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
      localStorage.setItem("ramosCarrito", JSON.stringify(carrito));
      sumarAlCarrito(ramos);
    });
    return carrito
  });
});

function sumarAlCarrito (ramos) {
  const existe = carrito.some((element) => element.id === ramos.id);
  const ramoAlCarrito = {...ramos, cantidad: 1}
  if (existe) {
    carrito.map((element) => {
      if (element.id === ramos.id){
        element.cantidad++;
        return element;
      }
    });
  } else {
    carrito.push(ramoAlCarrito);
  }
};

  
document.getElementById(`mostrarCarrito`).addEventListener("click", () => {
  mostrarCarrito.innerHTML = ""
  carrito.forEach (element => {  
    mostrarCarrito.innerHTML += ` 
    <div id="divProductos ${element.id}">
      <h2> Nombre: ${element.nombre} </h2>
      <p> Tipo: ${element.ramo} </p>
      <p> Precio: ${element.precio} </p>
      <p> Flores: ${element.flores} </p>
      <p> Cantidad: ${element.cantidad} </p>
      <button id= "borrar ${element.id}" class ="btnBorrar"> Eliminar del carrito </button>
    </div>
    `
  })
  borrarProducto()
});

function borrarProducto () {
  const btnBorrar = document.querySelectorAll(".btnBorrar")
  btnBorrar.forEach((element) => {
    element.addEventListener("click", (e) => {
      let id = parseInt(e.target.id);
      carrito = carrito.filter((element) => {
        return element.id !== id;
      });
      mostrarCarrito;
    });
  });
};

document.getElementById(`botonEnvio${carrito}`).addEventListener("click", () => {
  botonEnvio.innerHTML += `
  <h3> Precio final: ${carritoPrecios} </h3>
` 
});




// class Ramos {
//   constructor(id, nombre, ramo, precio, flores, ) {
//     this.id = id
//     this.nombre = nombre
//     this.ramo = ramo
//     this.precio = precio
//     this.flores = flores
//   }
// }

// const ramo1 = new Ramos (1, "ramo1", "variado chico", 2500, "flores variadas");
// const ramo2 = new Ramos (2, "ramo2", "rosas", 6000, "rosas rojas");
// const ramo3 = new Ramos (3, "ramo3", "liliums", 3500, "liliums blanco");
// const ramo4 = new Ramos (4, "ramo4", "variado grande", 7000, "flores variadas");

// let ramos = [ramo1, ramo2, ramo3, ramo4];



// ramos.forEach(ramos => {
//   divProductos.innerHTML += `
//     <div id="divProductos ${ramos.id}" class="productos">
//       <h2> Nombre: ${ramos.nombre} </h2>
//       <p> Tipo: ${ramos.ramo} </p>
//       <p> Precio: ${ramos.precio} </p>
//       <p> Flores: ${ramos.flores} </p>
//       <button id= "boton${ramos.id}"> Sumar al carrito </button>
//     </div>
//   `
// });
