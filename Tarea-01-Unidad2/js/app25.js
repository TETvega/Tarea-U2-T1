// 25. Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] determinar si
// un color introducido por el usuario a través de un prompt se encuentra dentro del array o
// no.

const colores = ["azul", "amarillo", "rojo", "verde", "café", "rosa"]

const color = prompt("Ingrese un color").toLocaleLowerCase()


if (colores.includes(color)) {
    console.log('El color se encuentra en el array');
}else{
    console.log('El color no existe en el array');
}