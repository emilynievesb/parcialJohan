document.getElementById("btnabrir").addEventListener("click", function () {
  document.getElementsByClassName("fondo-transparente")[0].style.display =
    "block";
  return false;
});
document
  .getElementsByClassName("modal-cerrar")[0]
  .addEventListener("click", function () {
    document.getElementsByClassName("fondo-transparente")[0].style.display =
      "none";
  });
// document.getElementById("btnabrir-2").addEventListener("click", function () {
//   document.getElementsByClassName("fondo-transparente-2")[0].style.display =
//     "block";
//   return false;
// });
// document
//   .getElementsByClassName("modal-cerrar-2")[0]
//   .addEventListener("click", function () {
//     document.getElementsByClassName("fondo-transparente-2")[0].style.display =
//       "none";
//   });
function operacionCuadrado(lado) {
  let area = lado * lado;
  let perimetro = 4 * lado;
  let text = `El área del cuadrado es ${area} y su perimetro es ${perimetro}`;
  return text;
}

let button = document.getElementById("calcular-1");

button.addEventListener("click", function (e) {
  let ladoCuadrado = document.getElementById("lado-cuadrado").value;
  let text = operacionCuadrado(ladoCuadrado);
  let resultadoCuadrado = document.getElementById("resultado-cuadrado");
  resultadoCuadrado.innerHTML = text;
});
