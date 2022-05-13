
class Ramos {
  constructor(id, nombre, ramo, precio, flores) {
    this.id = id
    this.nombre = nombre
    this.ramo = ramo
    this.precio = precio
    this.flores = flores
  }
}

const ramo1 = new Ramos (1, "ramo1", "variado chico", 2500, "flores variadas");
const ramo2 = new Ramos (2, "ramo2", "rosas", 6000, "rosas rojas");
const ramo3 = new Ramos (3, "ramo3", "variado mediano", 3500, "flores variadas");
const ramo4 = new Ramos (4, "ramo4", "variado grande", 7000, "flores variadas");

let ramos = [ramo1, ramo2, ramo3, ramo4];
let buscador = document.getElementById("buscador");
let divProductos = document.getElementById("divProductos");
let divCheckout = document.getElementById("divCheckout");
let costo = 500;
const carrito = [];
let productoElegido;

const suma1 = (ramo1, costo) => ramo1 + costo;
const suma2 = (ramo2, costo) => ramo2 + costo;
const suma3 = (ramo3, costo) => ramo3 + costo;
const suma4 = (ramo4, costo) => ramo4 + costo;


ramos.forEach(ramos => {
  divProductos.innerHTML += `
      <div id="divProductos ${ramos.id}" class="productos">
        <h2> Nombre: ${ramos.nombre} </h2>
        <p> Tipo: ${ramos.ramo} </p>
        <p> Precio: ${ramos.precio} </p>
        <p> Flores: ${ramos.flores} </p>
        <button id= "boton${ramos.id}"> Sumar al carrito </button>
        </div>
  `
})

ramos.forEach(ramos => {
  document.getElementById(`boton${ramos.id}`).addEventListener("click", () => {
    carrito.push(ramos);
    localStorage.setItem("ramosCarrito", JSON.stringify(carrito));
  })

})

carrito.forEach(carrito => {
  divCheckout.innerHTML += `
<div id= "divCheckout" ${carrito}>
  <button id= "botonCheckout"> Comprar <button>
</div>
`
})






