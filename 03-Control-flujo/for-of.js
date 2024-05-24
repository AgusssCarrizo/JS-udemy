// let i = 0;
// while (i < 10) {
//    if (i % 2 === 0) {
//       console.log(i);
//    }
//    i++;
// }

//* for (inicializacion (i)(variable), comparacion[validacion], terminarItecion[Que hacemos con i]){ }
//* for (let i = 2, i < 2; i++ ) {  if (i % 2 === 0) console.log(i) }
for (let i = 2; i < 2; i++) {
   if (i % 2 === 0) console.log(i);
}

//* for of
let animales = ["chanchito", "dragon", "caballo"];
for (let animal of animales) {
   console.log("animal: ", animal);
   console.log("primera letra: ", animal[0]); //Imprime primera letra
   console.log("Ultima letra: ", animal[8] || "no hay letra"); //Aca imprime la letra de cada array, y si no existe, entonces imprime lo escrite
   console.log("-----");
}
//* Metodo while para animales
console.log("Metodo while");
let i = 0;
while (i < animales.length) {
   console.log(animales[i]);
   i++;
}
