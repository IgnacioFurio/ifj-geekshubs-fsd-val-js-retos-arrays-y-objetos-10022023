// 1. Dado el array ["A", "B", "C", "D", "E", "F", "G", "H", "I"] crea una función que saque
// por consola la longitud del array. Crea otra función que obtenga un elemento
// aleatorio del array y lo saque por consola.

// let array = ["A", "B", "C", "D", "E", "F", "G", "H", "I"]


// const randomExtractor = (despliegue) => {
    
//     let random = Math.ceil(Math.random()* (despliegue.length))

//     return despliegue[random];

// };

// let resultado = randomExtractor(array)

// console.log(resultado)

////////////////////////////////////////////////////////////////


// 2. Crea un array con los nombres de los planetas del Sistema Solar. Crea una
// función que los liste y los saque por consola

// let planetas = ["Mercurio","Venus", "Tierra" , "Marte" , "Jupiter", "Saturno", "Urano" , "Neptuno"]


// const listado = (planets) => {

//         let cantidad = planets.length


//         for(let i = 0; i < cantidad; i++){

//             console.log(`${i + 1}--> ${planets[i]}`)

//         };

// }

// let resultado = listado(planetas)


//////////////////////////////////////////////////////////

// 3. Dado el array javascript1 = ["DOM", "BOM", "Funciones", "Arrays"], elimina
// "DOM" del array. Añade en su lugar el elemento "Objetos". Elimina el elemento
// "Arrays". Añade en su lugar el elemento "ArraysDifíciles". Haz una copia del array
// que solo incluya los últimos dos elementos. Obtén el índice del elemento
// "Funciones".

// let javascript1 = ["DOM", "BOM", "Funciones", "Arrays"]

// console.log(javascript1)

// javascript1 = javascript1.slice(1)

// console.log(javascript1)

// javascript1.splice(0,0, "Objetos")

// console.log(javascript1)

// javascript1 = javascript1.slice(0 , -1)

// console.log(javascript1)

// javascript1.splice(4, 0, "ArraysDifíciles")

// console.log(javascript1)


// let javascript2 = [ "Funciones","ArraysDifíciles"]

// console.log(javascript2.indexOf("Funciones"))
// console.log(javascript2[0])

///////////////////////////////////////////////////////////

// 4. Crea una string, pásala a array y saca por consola la versión invertida de la
// original. Ejemplo: "Hola" -> [H, o, l, a] -> [a, l, o, H] -> "aloH"

// let frase = prompt("Introduce una frase corta")

// let almacen = [...frase]

// // console.log(almacen.reverse())


/////////////////////////////////////////////////////////

// 5. Crea dos arrays de la misma longitud y una función que cree un nuevo array que
// intercale sus elementos y vacíe los arrays originales. Por ejemplo, con los arrays
// arrayUno = [1, 2, 3] y arrayDos = [4, 5, 6] el resultado debería ser [1, 4, 2, 5, 3, 6]




