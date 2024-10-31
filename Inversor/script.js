let stringEntrada = prompt("Digite uma palavra:");
let stringInvertida = "";
for (let i = stringEntrada.length - 1; i >= 0; i--){
    stringInvertida += stringEntrada.charAt(i);
}
alert("O inverso da palavra '"+ stringEntrada +"' é: '" + stringInvertida + "'");