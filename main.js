// ejercicio n1//
// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.
function div (numero){
    if ( numero % 2 ===0) {
        return console.log('el numero es par')
    } else {
        return console.log('el numero es impar')
    }
}

div(1)

// //ejercicio n2//
// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.
function minMax (n1,n2){
    if (n1>n2) {
        return console.log(`el numero mayor es ${n1}`)
    } else if (n1<n2) {
        return console.log(`el numero mayor es ${n2}`)     
    }else{
        return console.log('los numeros son iguales')
    }
}
minMax(7,5)

// //ejercicio 3//
// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.
function mult(numero){
    if(numero%5===0){
     return console.log(`${numero} es multiplo de 5`)
      }  
}
mult(5)

// //ejercicio 4//
// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.
function cuenta(numero){
     for( let i=0 ; i<=numero; i++ ){
        console.log(i)
    }    
 }
cuenta(8)

// //ejercicio 5//
// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.
function repe(nombre,numero){
     for (let i = 0; i<numero; i++) {
        console.log(nombre)
    }
}

repe('Brian',7)

//ejercicio 6//
// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

let frutas = ['manzana','banana','pera']

function miArray(elemento) {
     for (let i = 0; i < elemento.length; i++) {
     console.log(elemento[i])
    }
}
miArray(frutas)

//ejercico 7//
// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro//
