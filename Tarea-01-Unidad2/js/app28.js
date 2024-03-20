// 28. Crear una función que reciba un arreglo con palabras, crear un nuevo arreglo que
// contenga sólo las palabras que empiezan con una vocal.

const palabras= ['Hola Mundo' , 'Arbol' , 'Calcetin' , 'entrevista' , 'iguana']
console.log(palabras);



    
    // if (palabras[i[0].tolowercase()] === 'a' ||palabras[i[0].tolowercase] === 'e') {
    //     palabrasVocales.push(palabras[i])
    // }

function palabrasEmpiezanVocal(arrayPalabras) {
    const palabrasVocales = []
    const arrayVocales = ['a', 'e', 'i', 'o', 'u']
    for (let i = 0; i < arrayPalabras.length; i++) {
        
        if (arrayVocales.includes(arrayPalabras[i][0].toLowerCase())) {
            palabrasVocales.push(arrayPalabras[i])
        }
        
    }
    console.log(palabrasVocales);
    return palabrasVocales
}
   
const arrayPalabrasInicialVocales = palabrasEmpiezanVocal(palabras)
console.log(arrayPalabrasInicialVocales);

