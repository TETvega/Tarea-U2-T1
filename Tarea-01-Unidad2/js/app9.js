// Crear un programa que determine si un string introducido por un usuario inicia con un
// número o con una letra.

// no difiere de los espacios - nunca dijo si tenias que o no pero en caso
// seria el uso de trim 
const palabra = prompt('Ingrese una palabra')
// no se me ocurrio nada mejor 
const abcdario = 'a b c d e f g h i j k l m n ñ o p q r s t u' +
                'v w x y z A B C D E F G H I J K L M N Ñ O P Q ' +
                'R S T U V W X Y Z '


console.log(`"${palabra[0]}"`);
// console.log( parseInt(palabra[0]));
// console.log( typeof(parseInt(palabra[0])));
// parseInt(palabra[0]) != NaN || parseInt(palabra[0]) != undefined ||parseInt(palabra[0]) == null || 
// palabra[0].typeOff() = String
// typeof( palabra[0]

if( abcdario.includes(palabra[0]) ){
    console.log(`Inicia con una letra`);
}else{
    console.log(`Inicia con un numero`);
}

// if ( typeof ( parseInt(palabra[0]))  === 'number' ) {
//     console.log(`Inicia con una letra`);
        
// }else{
//     console.log(`Inicia con un numero`);
// }
// switch (true) {
//     case palabra[0].typeOff == palabra.typeOff:
//         console.log(`Inicia con una letra`);
        
//         break;
//     case palabra[0].typeOff == Number:
//         console.log(`Inicia con una numero`);
        
//         break;
//     default:
//         break;
// }
