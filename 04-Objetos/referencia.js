//*Primitivo: se copian

// let a = {};
// let b = a;

// b = 1;
// console.log(a, b);
//! Output: 2

//*Demostracion 2
// let a = 1;
// function suma(n) {
//    a++;
// }

// suma(n);
// console.log(n);

//! OUTPUT: 1, cada vez que definimos un parametro JS crea una variable para suma.

//* Referencia, se referencian: objetos, arrays, funciones
let a = {prop: 1};

function suma(n) {
   n.prop++;
}

suma(a);
console.log(a); //Output: 2.
