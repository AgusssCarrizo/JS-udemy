const array = [2, 5, 7, -55, -200, 30, 25, -20];

function cuantosPositivos(arr) {
   let positivo = 0;
   for (numero of arr) {
      if (numero > 0) {
         positivo++;
      }
   }
   return positivo;
}
let resultado = cuantosPositivos(array);
console.log(resultado);
