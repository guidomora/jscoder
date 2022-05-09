
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
let buscarProducto;

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
  const llevarProducto = () => {
    buscarProducto = ramos.find((ramos) => ramos.nombre === productoElegido)
  }
  llevarProducto;
  carrito.push(buscador);
  const envio = confirm("Quiere que se lo enviemos? Tiene un costo de $500")
    if (envio == true) {
      alert( + costo)
    } else if (envio == false) {
      alert(ramos.precio)
    }
})


// let costo = 500;
// let nombresRamos = prompt("Escriba ramo1, ramo2, ramo3, o ramo4 y en la consola podra ver las caracteristicas de cada uno")


// console.log(ramos.find(ramos => ramos.nombre == nombresRamos))

// while (nombresRamos !== "ramo1" && nombresRamos !== "ramo2" && nombresRamos !== "ramo3" && nombresRamos !== "ramo4") {
//   alert("producto invalido");
//   nombresRamos = prompt("ingrese ramo1, ramo2, ramo3, o ramo4");
//   console.log(ramos.find(ramos => ramos.nombre == nombresRamos))
// }


// let producto = prompt("elija un producto");

// while (producto !== "ramo1" && producto !== "ramo2" && producto !== "ramo3" && producto !== "ramo4") {
//   alert("producto invalido");

//   producto = prompt("ingrese un producto valido");
// }

// const envio = confirm("quiere que lo enviemos?")

// if (producto == "ramo1" && envio == true) {
//   alert(suma1(ramo1.precio, costo));
// } else if (producto == "ramo1" && (envio == false)) {
//   alert(ramo1.precio);
// }

// if (producto == "ramo2" && envio == true) {
//   alert(suma1(ramo2.precio, costo));
// } else if (producto == "ramo2" && (envio == false)) {
//   alert(ramo2.precio);
// }
// if (producto == "ramo3" && envio == true) {
//   alert(suma1(ramo3.precio, costo));
// } else if (producto == "ramo3" && (envio == false)) {
//   alert(ramo3.precio);
// }

// if (producto == "ramo4" && envio == true) {
//   alert(suma1(ramo4.precio, costo));
// } else if (producto == "ramo4" && (envio == false)) {
//   alert(ramo4.precio);
// }



