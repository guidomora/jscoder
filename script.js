



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

let ramos = [ramo1, ramo2, ramo3, ramo4];
let costo = 500;
let nombresRamos = prompt("Escriba ramo1, ramo2, ramo3, o ramo4. en la consola podra ver las caracteristicas de cada uno")

const suma1 = (ramo1, costo) => ramo1 + costo;
const suma2 = (ramo2, costo) => ramo2 + costo;
const suma3 = (ramo3, costo) => ramo3 + costo;
const suma4 = (ramo4, costo) => ramo4 + costo;



console.log(ramos.find(ramos => ramos.nombre == nombresRamos))


let producto = prompt("elija un producto");

while (producto !== "ramo1" && producto !== "ramo2" && producto !== "ramo3" && producto !== "ramo4") {
  alert("producto invalido");
  producto = prompt("ingrese un producto");
}

let envio = prompt("quiere que lo enviemos?");

if (producto == "ramo1" && envio == "si") {
  alert(suma1(ramo1, costo));
} else if (producto == "ramo1" && (envio == "no" || envio == "")) {
  alert(ramo1);
}

if (producto == "ramo2" && envio == "si") {
  alert(suma1(ramo2, costo));
} else if (producto == "ramo2" && (envio == "no" || envio == "")) {
  alert(ramo2);
}
if (producto == "ramo3" && envio == "si") {
  alert(suma1(ramo3, costo));
} else if (producto == "ramo3" && (envio == "no" || envio =="")) {
  alert(ramo3);
}

if (producto == "ramo4" && envio == "si") {
  alert(suma1(ramo4, costo));
} else if (producto == "ramo4" && (envio == "no" || envio =="")) {
  alert(ramo4);
}



