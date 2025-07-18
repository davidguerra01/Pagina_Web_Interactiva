

document.getElementById("formulario-contacto").addEventListener("submit", function(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre");
  const email = document.getElementById("email");
  const mensaje = document.getElementById("mensaje");

  let valido = true;

  if (nombre.value.trim() === "") {
    nombre.classList.add("is-invalid");
    valido = false;
  } else {
    nombre.classList.remove("is-invalid");
  }

  if (!email.value.includes("@") || email.value.trim() === "") {
    email.classList.add("is-invalid");
    valido = false;
  } else {
    email.classList.remove("is-invalid");
  }

  if (mensaje.value.trim() === "") {
    mensaje.classList.add("is-invalid");
    valido = false;
  } else {
    mensaje.classList.remove("is-invalid");
  }

  if (valido) {
    alert("Formulario enviado correctamente. 🌟");
    nombre.value = "";
    email.value = "";
    mensaje.value = "";
  }
});
