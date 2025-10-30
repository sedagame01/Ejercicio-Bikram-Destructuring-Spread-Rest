
/* Ejercicio 1: Intercambio de valores usando desestructuración */
const [a,b]=[10,5];
console.log(a); 
console.log(b); 

/* Ejercicio 2: Obtener el segundo elemento de un array */
const segundoElemento=[1, 2, 3, 4]
const [,segundo,]=segundoElemento
console.log(segundo)

/* Ejercicio 3: Desestructuración de un objeto con valores por defecto */
const persona = { edad: 25 };
const {nombre ='desconocido',edad}={edad:25}
console.log(nombre); // 'Desconocido'

/* Ejercicio 4: Sumar elementos de un array desestructurado */
function sumar ([a,b,c]){//con le indicamos que desectructore los elementos del array y lo use de forma separada
    return a+b+c
}
console.log(sumar([4, 5, 6, 7])); // 15

/* Ejercicio 5: Desestructuración con Rest para obtener elementos restantes */
const [,...restantes]=[1, 2, 3, 4]
console.log(restantes); // [2, 3, 4]    

/* Ejercicio 6: Desestructurar un objeto anidado */

const alumno = {
  individuo: "Roberto",
  direccion: {
    ciudad: "Quito",
    pais: "Ecuador",
  },
}

const {individuo,direccion:{ciudad, pais}}=alumno
console.log(individuo); // 'Roberto'
console.log(pais); // 'Ecuador'

/* Ejercicio 7: Desestructuración de múltiples objetos */
const persona1 = { nombre1: "Ana", edad: 28 };
const detalles = { profesion: "Ingeniera", pais: "España" };
/* 
console.log({ nombre1, edad, profesion, pais }); */
// { nombre: 'Ana', edad: 28, profesion: 'Ingeniera', pais: 'España' }

/* Ejercicio 8: Desestructuración en funciones */
const config = { host: "localhost", port: 8080 };
/**
 * 
 * @param {any} obj objeto 
 * @returns {string} el mensaje editado con los parametros
 */
function conectar(obj){
    const{host,port}=obj

    return `conectado a ${host} en el puerto ${port}`
}
console.log(conectar(config)); 

/* Ejercicio 9: Desestructurar un array de obje */
const personas = [{ prueba: "Juan" }, { prueba: "Pedro" }];
const [,{prueba}]=personas
console.log(prueba)

/*-------------- REST AND SPREAT ------------- */
/* 1 Escribe una función llamada sumEveryOtherque pueda recibir cualquier cantidad de números y devuelva la suma de todos los argumentos.
 */
/**
 * 
 * @param  {...any}
 * @returns {number}regresa la suma de todos los valores que se le pasa
 */
function sumEveryOther(...numeros){
    //ahora tenemos un arr y podemos usar el metodo reduce
    return numeros.reduce((acumulador,num)=>acumulador+num)
}

console.log(sumEveryOther(6, 8, 2, 3, 1))
console.log(sumEveryOther(11, 3, 12))

/* 2 Escribe una función llamada addOnlyNumsque pueda recibir cualquier número de argumentos (incluyendo números y cadenas) y retorne la suma solo de los números.
 */
/**
 * 
 * @param {Object} 
 * @returns 
 */
function filtrarNumeros (obj){
    return obj*0===0
}
function addOnlyNums(...numeros){

    const filtrados = numeros.filter(filtrarNumeros)
    return filtrados.reduce((acumulador,num)=>acumulador+num)   
}

console.log(addOnlyNums(1, "perro", 2, 4,15,'patata','abeja',1))

/* 3 Escribe una función llamada countTheArgsque pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.
 */
function countTheArgs(...loQueSea){
    return loQueSea.length
}
countTheArgs("gato", "perro"); //2
console.log(countTheArgs("gato", "perro", "pollo", "oso")) //4

/* 4 Escribe una función llamada combineTwoArraysque reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando el operador spread).
 */
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

function combineTwoArrays(arr1,arr2){
    const arr3 =[...arr1,...arr2]
    return arr3 

}
console.log(combineTwoArrays(array1, array2))

/* 5 Escriba una función llamada onlyUniquesque acepte cualquier número de argumentos y devuelva una matriz de elementos únicos, sin repetidos.
 */
function onlyUniques(...args) {
  return [...new Set(args)];
}

console.log(onlyUniques("gato", "pollo", "cerdo", "cerdo"))
console.log(onlyUniques(1, 1, 2, 2, 3, 6, 7, 8))

/* 6 Escriba una función llamada combineAllArraysque pueda recibir cualquier cantidad de arrays 
como argumentos y los combine todos en un solo array. */

function combineAllArrays(...valor){
    return valor.flat()

}
console.log(combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1])) 
combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1])

/* Escriba una función llamada sumAndSquareque reciba cualquier número de argumentos, 
los eleve al cuadrado y devuelva la suma de todos los valores cuadrados. */
function sumaCuadrados(...valor){
    return valor.map(temporal=>temporal**2).reduce((acumulador,valorActual)=>acumulador+valorActual,0)
}
console.log(sumaCuadrados(1, 2, 3))
console.log(sumaCuadrados(4, 5))
console.log(sumaCuadrados(1, 2, 3, 4))