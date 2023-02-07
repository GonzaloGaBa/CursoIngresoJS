//Gonzalo Barrientos- Div X
function mostrar() {
  let nombre;
  let estadoCivil;

  nombre = parseInt(document.getElementById("txtIdEdad").value);
  estadoCivil = document.getElementById("estadoCivil").value;

  if (nombre >= 18 && estadoCivil == "Soltero") {
    alert("Es soltero y no es menor.");
  }
} //FIN DE LA FUNCIÓN
