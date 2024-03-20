// 26. El usuario ingresa un string con varias palabras separadas por coma en un popup y se
// deben convertir en un array, (el usuario ingresa: "1,2,3,4,5" y se convierte en [1,2,3,4,5]).

const numerosString= prompt("Ingrese numeros separados por ','")

console.log(numerosString);
const numerosSeparados = numerosString.split(',')
console.log(numerosSeparados);

const numerosArrayNumero = []

for (let i = 0; i < numerosSeparados.length; i++) {
    
    numerosArrayNumero.push(Number(numerosSeparados[i]))
    
}

console.log(numerosArrayNumero);