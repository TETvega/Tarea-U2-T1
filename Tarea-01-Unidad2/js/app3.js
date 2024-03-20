// Escriba un programa que pida un número y diga si es divisible por 2.

const numero1 = parseFloat(prompt("Ingrese un Numero X"))

if (numero1 %2 == 0) {
    console.log(`${numero1} es divisible por 2`);
}else{
    console.log(`${numero1} NO es divisible por 2`);
}