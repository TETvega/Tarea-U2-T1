// 31. Crear una función que tome como parámetro un arreglo de números, retornar un nuevo
// arreglo invirtiendo los elementos ejemplo. [1,2,3] => [3,2,1].\



const arreglo = [ 4, 3 , 88 , 896 ,25]


function arregloAlreves(arreglo) {
    if (arreglo.length === 0 ) {
        return 0;
    }
    const arrayAlrevez = []
    
    // arreglo.forEach(elemento => {
    //     arrayAlrevez = [...elemento, ...arrayAlrevez]
    // });

    for (let i = arreglo.length-1; i >= 0; i--) {
        arrayAlrevez.push(arreglo[i])  
    }

    return arrayAlrevez;
}
console.log(arreglo);
console.log('El arreglo alrevez es');
console.log(arregloAlreves(arreglo));
