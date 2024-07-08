// Función para excribir tecla tocada en pantalla
function imprime(valor) {
  document.getElementById("pantalla").value += valor;
}

//Función para calcular el resultado
function calcula() {
  const valorPantalla = document.getElementById("pantalla").value;
  const resultado = eval(valorPantalla);
  document.getElementById("pantalla").value = resultado;
}

//Función para borrar cálculo
function borrar() {
  document.getElementById("pantalla").value = "";
}
