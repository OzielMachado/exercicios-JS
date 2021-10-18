function calcularPrimo() {
    var inNum = document.getElementById("inNum");
    var outResposta = document.getElementById("outResposta");
    var num = Number(inNum.value);
    var i;
    var resultado = 0;
    for (i = 2; i < num ; i++) {
        if (num % i == 0) {
           resultado++;
           break;
        }
     }
     if (resultado == 0) {
         outResposta.textContent = num + " é um número primo";
     } else {
        outResposta.textContent = num + " não é um número primo";
     }
}
var btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", calcularPrimo);
