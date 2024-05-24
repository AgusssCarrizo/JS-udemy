let array = [2, 5, 7, -5, -100, -200, 20];
function getMenorMayor(arr) {
   let mayor = arr[0];
   let menor = arr[0];
   for (numero of arr) {
      menor = menor < numero ? menor : numero;
      mayor = mayor > numero ? mayor : numero;
   }
   return [menor, mayor];
}
let numeros = getMenorMayor(array);
console.log(numeros);
