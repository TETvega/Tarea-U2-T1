
// Escriba un programa que pida una frase y escriba cuantas veces aparece la letra a.

const palabra = prompt('Ingrese una palabra')
let contador=0
for (let i = 0; i < palabra.length; i++) {
    
    if (palabra[i].toLowerCase() === 'a') {
        contador++;
    }
    
}
console.log(`La letra a aparece ${contador} en la palabra ${palabra}`);
