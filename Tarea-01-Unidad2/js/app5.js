// Escriba un programa que pida una frase y escriba cuántas veces aparecen cada una de
// las vocales.


const palabra = prompt('Ingrese una palabra')
const contador = {
    a : 0 ,
    e : 0,
    i : 0,
    o : 0,
    u : 0,
}
for (let i = 0; i < palabra.length; i++) {
    

    switch (true) {
        case palabra[i].toLowerCase() === 'a':
            contador.a++
            break;
        case palabra[i].toLowerCase() === 'e':
            contador.e ++
            break;
        case palabra[i].toLowerCase() === 'i':
            contador.i ++
            break;
        case palabra[i].toLowerCase() === 'o':
            contador.o ++
            break;
        case palabra[i].toLowerCase() === 'u':
            contador.u ++
            break;
        default:
            break;
    }
}

console.log(palabra);
// contador.forEach( vocal => {
    
//     console.log(`La vocal ${vocal} aparece ${contador[vocal]} veces`);
// });

for (const vocal in contador) {
    console.log(`La vocal ${vocal} aparece ${contador[vocal]} veces`);
}
