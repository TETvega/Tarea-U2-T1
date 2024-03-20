// 24. Crear un array vacío, luego generar N números al azar y guardarlos en un array, N es
// introducido por el usuario a través de un prompt.
const numerosRandom = []
const index = parseInt(prompt("Ingrese un numero entero Positivo"))

if (index>=1) {
    for (let i = 0; i < index; i++) {
    
        const numero = Math.floor(Math.random(100)*1001)
        numerosRandom.push(numero)
    }
    console.log(numerosRandom);

} else {
    console.log(`No ingreso correctamente : ${index}`);
}


