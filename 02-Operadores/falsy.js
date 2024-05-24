//! Short circuit

//? falso
//* false
//* 0
//* ""
//* null
//* undefined
//* NaN

let nombre = "";
let usuario = nombre || "Usuario";

console.log(usuario);

function fn1() {
   console.log("Soy fn1");
   return true;
}
function fn2() {
   console.log("Soy fn2");
   return true;
}

let x = fn1() && fn2();
