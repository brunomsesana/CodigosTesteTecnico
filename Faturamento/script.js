let diaMenor;
let menorValor = Infinity;
let diaMaior;
let maiorValor = 0;
let quant = 0;
let soma = 0;

for(let i = 0; i < dados.length; i++){
    if (dados[i].valor != 0){
        if (menorValor > dados[i].valor){
            diaMenor = dados[i].dia;
            menorValor = dados[i].valor;
        }
        if (maiorValor < dados[i].valor){
            diaMaior = dados[i].dia;
            maiorValor = dados[i].valor;
        }
        soma += dados[i].valor;
        quant++;
    }
}

let media = soma / quant;
let quantMaiorMedia = 0;

for(let i = 0; i < dados.length; i++){
    if (dados[i].valor > media){
        quantMaiorMedia++;
    }
}

alert("O dia com o menor faturamento no mês foi o dia " + diaMenor + " com R$" + menorValor + " de faturamento");
alert("O dia com o maior faturamento no mês foi o dia " + diaMaior + " com R$" + maiorValor + " de faturamento");
alert("Tivemos " + quantMaiorMedia + " dias que ultrapassaram a média mensal de " + media);