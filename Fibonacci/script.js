let numSelected = parseInt(prompt("Digite um número inteiro:"));
let fibonacci = [0];
let numAtual;
let numAnterior;
let i = 0;

while (i < numSelected){
    numAtual = i;
    if (i == 0) {
        i = 1;
    } else {
        i += numAnterior;
    }
    numAnterior = numAtual;
    fibonacci.push(i);
}

alert("Sequencia Fibonacci Calculada: " + fibonacci);

if(fibonacci.includes(numSelected)){
    alert("O número " + numSelected + " está na sequencia Fibonacci.")
} else {
    alert("O número " + numSelected + " NÃO está na sequencia Fibonacci.")
}