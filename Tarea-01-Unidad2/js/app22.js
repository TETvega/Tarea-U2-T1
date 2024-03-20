// Dado el array = [1,2,3,4,5,6]

const numeros = [1,2,3,4,5,6]
// a. Iterar por todos los elementos dentro de un array utilizando while y mostrarlos en
// pantalla.

console.log("------------------------------------");
console.log("--------------   WHILE   ----------------------");
let i=0
while (i != numeros.length) {

    console.log(numeros[i]);
    i++
}
// b. Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en
// pantalla.
console.log("------------------------------------");
console.log("--------------   FOR   ----------------------");
for (let i = 0; i < numeros.length; i++) {
    
    console.log(numeros[i]);
    
}
// c. Iterar por todos los elementos dentro de un array utilizando .forEach y mostrarlos
// en pantalla.
console.log("------------------------------------");
console.log("--------------   FOREACH   ----------------------");

numeros.forEach( numero => console.log(numero));

// d. Mostrar todos los elementos dentro de un array sumándole uno a cada uno.
console.log("------------------------------------");
console.log("--------------   i+1 a cada 1  ----------------------");

numeros.forEach( numero => console.log(numero+1));

// e. Generar una copia de un array pero con todos los elementos incrementados en 1.
console.log("------------------------------------");
console.log("--------------   Nuevo array +1  ----------------------");
// const nuevoNumeros = [...(numeros+1)]
// const nuevoNumeros = Map(numeros => numeros+1)
const nuevoNumeros = numeros.map(numero => numero+1)
console.log(nuevoNumeros);

// f. Calcular el promedio

console.log("------------------------------------");
console.log("--------------   Calculo de Promedio  ----------------------");
let suma = 0

numeros.forEach( numero => suma+=numero);

console.log(`El promedio es de ${suma/numeros.length}`);







