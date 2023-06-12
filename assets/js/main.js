const mensaje = Array();
let dni;
let nombre;
let apellido;
let email;

init();

function init() {
  const form = document.querySelector("#formulario");

  for (let i of form.elements) {
    i.addEventListener("focus", function () {
      this.classList.add("activo");
    });

    i.addEventListener("blur", function () {
      this.classList.remove("activo");
    });
  }

  dni = document.getElementById("dni");
  nombre = document.getElementById("nombre");
  apellido = document.getElementById("apellido");
  email = document.getElementById("email");

  dni.focus();

  document.querySelector("#btnGuardar").addEventListener("click", function () {
    validacion = validar();

    if (validacion === -1) {
      enviar();
    } else {
      controlDeError(validacion);
    }
  });
}

function validar() {
  var validacion = "";

  if (dni.value === "") {
    return 0;
  }

  if (dni.value < 10000 || dni.value > 99999999) {
    return 1;
  }

  if (nombre.value === "") {
    return 2;
  }

  if (nombre.value.length < 5) {
    return 3;
  }

  if (apellido.value === "") {
    return 4;
  }

  if (apellido.value.length < 5) {
    return 5;
  }

  if (email.value === "") {
    return 6;
  }

  if (!email.value.includes("@") || !email.value.includes(".com")) {
    return 7;
  }

  return -1;
}

function controlDeError(errnro) {
  var mensaje = [
    "El DNI no puede estar vacio",
    "El numero ingresado no parece un DNI",
    "El nombre no puede esta en blanco",
    "Debe ingreasar un nombre valido",
    "El apellido no puede esta en blanco",
    "Debe ingreasar un apellido valido",
    "Debe ingresar un e-mail",
    "El campo ingresado debe incluir un @ y un .com",
  ];

  switch (errnro) {
    case 0:
    case 1:
      dni.focus();
      break;
    case 2:
    case 3:
      nombre.focus();
      break;
    case 4:
    case 5:
      apellido.focus();
      break;
    case 6:
    case 7:
      email.focus();
      break;
  }
  alert(mensaje[errnro]);
}

function enviar() {
  alert("Se envía correctamente el formulario");
  dni.value = "";
  nombre.value = "";
  apellido.value = "";
  email.value = "";
}
