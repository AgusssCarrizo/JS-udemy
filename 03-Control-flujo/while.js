//Contar hasta 10 los numeros pares
//* variable: let i = 0
//* while (condicion) {codigo}
//? En el bucle while, primero se evalúa la condición. Si la condición es verdadera, se ejecuta el bloque de código. Si la condición es falsa desde el principio, el bloque de código nunca se ejecuta.
//!Es posible que el bloque de código no se ejecute si la condición es falsa desde el principio.

let i = 0;
while (i < 10) {
   if (i % 2 === 0) {
      console.log(i);
   }
   i++;
}

//* Do While
//?En el bucle do while, primero se ejecuta el bloque de código y luego se evalúa la condición. Esto significa que el bloque de código se ejecutará al menos una vez, incluso si la condición es falsa.
//!Garantiza que el bloque de código se ejecute al menos una vez, independientemente de si la condición es verdadera o falsa.
do {
   if (i % 2 === 0) {
      console.log(i);
   }
   i++;
} while (i < 10);
