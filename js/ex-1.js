function calcularIdade() {
    var inNome = document.getElementById("inNome");
    var inAno = document.getElementById("inAno");
    var outIdade = document.getElementById("outIdade");
    var nome = inNome.value
    var ano = Number(inAno.value);
    var idade = 2021 - ano;
    outIdade.textContent = nome + " tem, aproximadamente, " + idade + " anos.";
}
var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", calcularIdade);