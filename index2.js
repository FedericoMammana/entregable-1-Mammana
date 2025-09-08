class Guante {
  constructor(id, talle, color, precio, marca) {
    this.id = id;
    this.talle = talle;
    this.color = color;
    this.precio = precio;
    this.marca = marca;
  }
  mostrar_descripcion() {
    return (
      "#" +
      this.id +
      " - " +
      this.talle +
      " Color " +
      this.color +
      " $ " +
      this.precio +
      " Marca " +
      this.marca
    );
  }
  getId() {
    return this.id;
  }
  getPrecio() {
    return this.precio;
  }
}

const arreglo_guantes = [];
arreglo_guantes.push(new Guante(1, "14oz", "rojo", 80000, "Corti"));
arreglo_guantes.push(new Guante(2, "16oz", "negro", 180000, "Cleto Reyes"));
arreglo_guantes.push(new Guante(3, "10oz", "plata", 90000, "Tittle"));
arreglo_guantes.push(new Guante(4, "12oz", "dorado", 60000, "Everlast"));
arreglo_guantes.push(new Guante(5, "18oz", "rosa", 270000, "Winning"));
arreglo_guantes.push(new Guante(6, "14oz", "azul", 80000, "Twin"));

const carrito = [];

let respuesta = true;

while (respuesta != "Salir" && respuesta) {
  respuesta = mostrarMenu();
}

// ---------------- FUNCIONES ----------------

function mostrarMenu() {
  let respuesta = prompt(
    "¿Qué desea hacer? \n 1) Ver Guantes \n 2) Comprar Guantes \n 3) Mostrar Carrito \n 4) Salir"
  );

  switch (respuesta) {
    case "1":
      alert("Los guantes son: \n" + mostrar_guantes());
      break;

    case "2":
      comprarGuante();
      break;

    case "3":
      alert("Carrito: \n" + mostrarCarrito());
      break;

    case "4":
      mostrarTicketFinal();
      return "Salir";

    default:
      alert("Opción no válida.");
  }
  return respuesta;
}

function mostrar_guantes() {
  let lista = "";
  arreglo_guantes.forEach((g) => {
    lista += g.mostrar_descripcion() + "\n";
  });
  return lista;
}

function comprarGuante() {
  // mostramos los guantes disponibles
  alert("Guantes disponibles:\n" + mostrar_guantes());

  let id = parseInt(prompt("Ingrese el ID del guante que desea comprar:"));

  let guante = arreglo_guantes.find((g) => g.getId() === id);

  if (guante) {
    carrito.push(guante);
    alert("Guante agregado al carrito: " + guante.mostrar_descripcion());
  } else {
    alert("No se encontró un guante con ese ID.");
  }
}

function mostrarCarrito() {
  if (carrito.length === 0) {
    return "El carrito está vacío.";
  }

  let detalle = "";
  carrito.forEach((g) => {
    detalle += g.mostrar_descripcion() + "\n";
  });

  return detalle;
}

function calcularTotal() {
  let total = 0;
  for (let guante of carrito) {
    total += guante.getPrecio();
  }
  return total;
}

function mostrarTicketFinal() {
  if (carrito.length === 0) {
    alert("No compró ningún guante. ¡Hasta luego!");
    return;
  }

  let detalle = "Ticket de compra:\n\n";
  carrito.forEach((g) => {
    detalle += g.mostrar_descripcion() + "\n";
  });

  let total = calcularTotal();
  detalle += "\n Total gastado: $ " + total;

  alert(detalle);
}
