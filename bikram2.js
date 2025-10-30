/* 1.- Dado el objeto empleados , extrae la empleada Ana completa. */
const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];


/* 2 extraer luis */
function buscar(nombre){
    const {name,email} = empleados.find(empleado=>empleado.name === `${nombre}`)
return console.log(name, email)
}

buscar('Luis')

/* 3 cambiar valores con desestructuracion */
// Inicialmente
let a = 5;
let b = 3;
//desdestructuramos y hacemos el cambio de valores 
[a,b]=[b,a]

console.log(`a = ${a} y b = ${b}`)

/* 4 meter los valores de un objeto en dos varible  */
const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
};

// 5 se reasigna el valor de ayer y hoy en las variables maxhoy y maxmañana = el objeto claro
const { today: maximaHoy, tomorrow: maximaManana, yesterday:maxAyer } = HIGH_TEMPERATURES;

console.log(maximaHoy);
console.log(maximaManana);
console.log(maxAyer)

/* 6.- Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos
 (incluyendo números y cadenas y devolver la suma solo de los números).  */

function addOnlyNums(...args) {
  return args
    .filter(temporal => typeof temporal === "number") //filtramos que sean numeros
    .reduce((acumulador, actual) => acumulador + actual, 0); // suma
}

console.log(addOnlyNums(1, "perro", 2, 4));


/* 7.- Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos 
y devuelva un número que indique cuántos argumentos ha recibido. */

function countTheArgs(...args) {
    //al usar ... nos regresa un arr y podemos usar todos los metodos podemos usar length
  return args.length;
}

console.log(countTheArgs("gato", "perro"));
console.log(countTheArgs("gato", "perro", "pollo", "oso"));

/* 8.- Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva 
solo un array que combine los dos (usando el operador spread). */

function combineTwoArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

console.log(combineTwoArrays([1, 2, 3], [4, 5, 6, 7, 8]));


