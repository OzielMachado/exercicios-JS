function dataPorExtenso() {
    var inDia = document.getElementById("inDia");
    var inMes = document.getElementById("inMes");
    var inAno = document.getElementById("inAno");
    var outResposta = document.getElementById("outResposta");
    dia = Number(inDia.value);
    mes = Number(inMes.value);
    ano = Number(inAno.value);
    switch(mes) {
        case 1:
        case 01: outResposta.textContent = dia + " de janeiro de " + ano; break;
        case 2:
        case 02: outResposta.textContent = dia + " de fevereiro de " + ano; break;
        case 3:
        case 03: outResposta.textContent = dia + " de março de " + ano; break;
        case 4:
        case 04: outResposta.textContent = dia + " de abril de " + ano; break;
        case 5:
        case 05: outResposta.textContent = dia + " de maio de " + ano; break;
        case 6:
        case 06: outResposta.textContent = dia + " de junho de " + ano; break;
        case 7:
        case 07: outResposta.textContent = dia + " de julho de " + ano; break;
        case 8:
        case 08: outResposta.textContent = dia + " de agosto de " + ano; break;
        case 9:
        case 09: outResposta.textContent = dia + " de setembro de " + ano; break;
        case 10: outResposta.textContent = dia + " de outubro de " + ano; break;
        case 11: outResposta.textContent = dia + " de novembro de " + ano; break;
        case 12: outResposta.textContent = dia + " de dezembro de " + ano; break;
        default: alert("Mês inválido");
    }
}
var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", dataPorExtenso);