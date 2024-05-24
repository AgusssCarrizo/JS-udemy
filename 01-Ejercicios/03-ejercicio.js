function getByIdx(arr, idx) {
   if (idx < 0 || arr.length <= idx) {
      console.log("error");
   }
   return arr[idx];
}
let resultado = getByIdx([1, 2, 3, 4], 3);
console.log(resultado);
