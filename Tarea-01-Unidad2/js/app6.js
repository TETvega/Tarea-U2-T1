
// Escribir un programa que escriba en pantalla los divisores de un número dado.

const numero = parseInt(prompt('Ingrese un Numero Entero'))
const divisores = []

for (let i = 0; i <= numero; i++) {
    
    if ( numero % i === 0) {
        divisores.push(i)
    }

}
console.log(`Los Divisores de ${numero} son : ${divisores}`);
alert(`Los Divisores de ${numero} son : ${divisores}`)

