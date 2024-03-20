// Determinar si una palabra empieza con mayúscula o no.


const palabra = prompt('Ingrese una palabra').trimStart()
const abcdarioMayusculas = 'A B C D E F G H I J K L M N Ñ O P Q ' +
                'R S T U V W X Y Z '
const abcdarioMinusculas = 'a b c d e f g h i j k l m n ñ o p q r s t u' +
                'v w x y z '

console.log(`"${palabra[0]}"`);


switch (true) {
    case abcdarioMayusculas.includes(palabra[0]):
        console.log(`Inicia con una letra Mayuscula`);
        break;
    case abcdarioMinusculas.includes(palabra[0]):
        console.log(`Inicia con una letra Minuscula`);
        break;
    default:
        console.log(`Inicia con un signo o  numero`);
        break;
}
