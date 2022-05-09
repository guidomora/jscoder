
class Ramos {
  constructor(nombre, ramo, precio, flores) {
    this.nombre = nombre
    this.ramo = ramo
    this.precio = precio
    this.flores = flores
  }
}

const ramo1 = new Ramos ("ramo1", "variado chico", 2500, "flores variadas");
const ramo2 = new Ramos ("ramo2", "rosas", 6000, "rosas rojas");
const ramo3 = new Ramos ("ramo3", "variado mediano", 3500, "flores variadas");
const ramo4 = new Ramos ("ramo4", "variado grande", 7000, "flores variadas");

let ramos = [ramo1, ramo2, ramo3, ramo4];
let buscador = document.getElementById("buscador");
let divProductos = document.getElementById("divProductos");
let boton = document.getElementById("boton");
let costo = 500;
const carrito = [];
let productoElegido;

const suma1 = (ramo1, costo) => ramo1 + costo;
const suma2 = (ramo2, costo) => ramo2 + costo;
const suma3 = (ramo3, costo) => ramo3 + costo;
const suma4 = (ramo4, costo) => ramo4 + costo;


buscador.addEventListener("change", () => {
  let busqueda = buscador.value;
  console.log(busqueda.toLowerCase());
  let ramosFilter = ramos.filter( ramo => ramo.nombre.includes(busqueda.toLowerCase()));
  ramosFilter.forEach (ramos => {
    divProductos.innerHTML += `
        <div>
          <h3> Ramos ${ramos.nombre} </h3>
          <p> Tipo de ramo: ${ramos.ramo} </p>
          <p> Precio: ${ramos.precio} </p>
          <p> Flores que lleva: ${ramos.flores} </p>
        </div>
    `
  })
  return busqueda
});

boton.addEventListener("click", () => {
  let boton = buscador.value;
  alert("Usted eligio " + boton);
  const buscarProducto = ramos.find(ramo  => ramo.nombre === productoElegido); 
  console.log(buscarProducto);
carrito.push(buscarProducto);
  const envio = confirm("Quiere que se lo enviemos? Tiene un costo de $500")
    if (envio == true) {
      alert( + costo)
    } else if (envio == false) {
      alert(ramos.precio)
    }
})








