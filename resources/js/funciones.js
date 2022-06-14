document.getElementById("mascota").onmouseover = function () {
  mouseOver("mascota");
};
document.getElementById("mascota").onmouseout = function () {
  onmouseout("mascota");
};
document.getElementById("bebe").onmouseover = function () {
  mouseOver("bebe");
};
document.getElementById("bebe").onmouseout = function () {
  onmouseout("bebe");
};
document.getElementById("limpieza").onmouseover = function () {
  mouseOver("limpieza");
};
document.getElementById("limpieza").onmouseout = function () {
  onmouseout("limpieza");
};
document.getElementById("tv").onmouseover = function () {
  mouseOver("tv");
};
document.getElementById("tv").onmouseout = function () {
  onmouseout("tv");
};
document.getElementById("aire").onmouseover = function () {
  mouseOver("aire");
};
document.getElementById("aire").onmouseout = function () {
  onmouseout("aire");
};
document.getElementById("calefaccion").onmouseover = function () {
  mouseOver("calefaccion");
};
document.getElementById("calefaccion").onmouseout = function () {
  onmouseout("calefaccion");
};

function mouseOver(nombre) {
  document.getElementById(nombre).style.fontSize = "5em";
  document.getElementById("p" + nombre).style.display = "inline";
}

function onmouseout(nombre) {
  document.getElementById(nombre).style.fontSize = "4.4em";
  document.getElementById("p" + nombre).style.display = "none";
}

let scrollContador = 0; //funcion scroll
function scrollFuncion() {
  scrollContador += 1;
  if (scrollContador > 10) {
    document.getElementById("menu").classList.replace("menu", "menuScroll");
  }
  if (document.documentElement.scrollTop == 0) {
    document.getElementById("redesIconos").style.display = "none";
    document.getElementById("menu").classList.replace("menuScroll", "menu");
  }

  if (scrollContador > 10) {
    document.getElementById("redesIconos").style.display = "block";
  }
}

function cerrar() {
  document.getElementById("whatsapp").style.display = "none";
}

function contactar() {
  nombreContacto = document.contacto.nombreContacto;
  correoContacto = document.contacto.correoContacto;
  mensajeContacto = document.contacto.mensajeContacto;

  if (nombreContacto.value.trim().length > 0) {
    document.getElementById("nombreContacto").style.backgroundColor =
      "transparent";
    document.getElementById("nombreContacto").style.color = "black";

    if (
      validarEmail(correoContacto.value.trim()) &&
      correoContacto.value.trim().length > 0
    ) {
      document.getElementById("nombreContacto").style.backgroundColor =
        "transparent";
      document.getElementById("nombreContacto").style.color = "black";
      if (mensajeContacto.value.trim().length > 0) {
        document.getElementById("mensajeContacto").style.backgroundColor =
          "transparent";
        document.getElementById("mensajeContacto").style.color = "black";
        return true;
      } else {
        document.getElementById("mensajeContacto").style.backgroundColor =
          "red";
        document.getElementById("mensajeContacto").style.color = "white";
        alert("Ingrese un mensaje.");
        return true;
      }
    } else {
      document.getElementById("correoContacto").style.backgroundColor = "red";
      document.getElementById("correoContacto").style.color = "white";
      alert("Ingrese mail correcto.");
    }
  } else {
    document.getElementById("nombreContacto").style.backgroundColor = "red";
    document.getElementById("nombreContacto").style.color = "white";
    alert("Ingrese nombre correcto.");
  }
  return false;
}

function validarEmail(Entrada) {
  var patronmail = /^\w+@\w+(\.\w{3})$/;
  if (patronmail.test(Entrada)) {
    return true;
  } else {
    return false;
  }
}

function reservar() {
  nombrereserva = document.reserva.nombrereserva;
  correoreserva = document.reserva.correoreserva;
  mensajereserva = document.reserva.mensajereserva;

  if (nombrereserva.value.trim().length > 0) {
    document.getElementById("nombrereserva").style.backgroundColor =
      "transparent";
    document.getElementById("nombrereserva").style.color = "black";

    if (
      validarEmail(correoreserva.value.trim()) &&
      correoreserva.value.trim().length > 0
    ) {
      document.getElementById("nombrereserva").style.backgroundColor =
        "transparent";
      document.getElementById("nombrereserva").style.color = "black";
      if (mensajereserva.value.trim().length > 0) {
        document.getElementById("mensajereserva").style.backgroundColor =
          "transparent";
        document.getElementById("mensajereserva").style.color = "black";
        return true;
      } else {
        document.getElementById("mensajereserva").style.backgroundColor = "red";
        document.getElementById("mensajereserva").style.color = "white";
        alert("Ingrese un mensaje.");
        return true;
      }
    } else {
      document.getElementById("correoreserva").style.backgroundColor = "red";
      document.getElementById("correoreserva").style.color = "white";
      alert("Ingrese mail correcto.");
    }
  } else {
    document.getElementById("nombrereserva").style.backgroundColor = "red";
    document.getElementById("nombrereserva").style.color = "white";
    alert("Ingrese nombre correcto.");
  }
  return false;
}
