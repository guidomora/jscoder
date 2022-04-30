



class Ramos {
  constructor(nombre, ramo, precio, flores, stock) {
    this.nombre = nombre
    this.ramo = ramo
    this.precio = precio
    this.flores = flores
    this.stock = stock
  }
}

const ramo1 = new Ramos ("ramo1", "variado chico", 2500, "flores variadas", 30);
const ramo2 = new Ramos ("ramo2", "rosas", 6000, "rosas rojas", 15);
const ramo3 = new Ramos ("ramo3", "variado mediano", 3500, "flores variadas", 25);
const ramo4 = new Ramos ("ramo4", "variado grande", 7000, "flores variadas", 20);
const carrito = [];

const suma1 = (ramo1, costo) => ramo1 + costo;
const suma2 = (ramo2, costo) => ramo2 + costo;
const suma3 = (ramo3, costo) => ramo3 + costo;
const suma4 = (ramo4, costo) => ramo4 + costo;

let ramos = [ramo1, ramo2, ramo3, ramo4];
let costo = 500;
let nombresRamos = prompt("Escriba ramo1, ramo2, ramo3, o ramo4 y en la consola podra ver las caracteristicas de cada uno")


console.log(ramos.find(ramos => ramos.nombre == nombresRamos))

while (nombresRamos !== "ramo1" && nombresRamos !== "ramo2" && nombresRamos !== "ramo3" && nombresRamos !== "ramo4") {
  alert("producto invalido");
  nombresRamos = prompt("ingrese ramo1, ramo2, ramo3, o ramo4");
  console.log(ramos.find(ramos => ramos.nombre == nombresRamos))
}


let producto = prompt("elija un producto");

while (producto !== "ramo1" && producto !== "ramo2" && producto !== "ramo3" && producto !== "ramo4") {
  alert("producto invalido");

  producto = prompt("ingrese un producto valido");
}

const envio = confirm("quiere que lo enviemos?")

if (producto == "ramo1" && envio == true) {
  alert(suma1(ramo1.precio, costo));
} else if (producto == "ramo1" && (envio == false)) {
  alert(ramo1.precio);
}

if (producto == "ramo2" && envio == true) {
  alert(suma1(ramo2.precio, costo));
} else if (producto == "ramo2" && (envio == false)) {
  alert(ramo2.precio);
}
if (producto == "ramo3" && envio == true) {
  alert(suma1(ramo3.precio, costo));
} else if (producto == "ramo3" && (envio == false)) {
  alert(ramo3.precio);
}

if (producto == "ramo4" && envio == true) {
  alert(suma1(ramo4.precio, costo));
} else if (producto == "ramo4" && (envio == false)) {
  alert(ramo4.precio);
}



