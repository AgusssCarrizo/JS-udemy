const saludo = "Hola Mundo";
const despedida = new String("chao mundo"); //*Devuelve un objeto

console.log(typeof saludo);
console.log(typeof despedida);

console.log(saludo.length);
console.log(saludo.indexOf("Mu")); //*Muestra el indice de donde el indicie colocado: Output: 5
console.log(saludo.indexOf("oresa")); //*Output: -1
console.log(saludo.includes("oresa")); //*  devuelve true o false si el indice existe o no Output:false
console.log(saludo.replace("Hola", "Chau")); //*  devuelve true o false si el indice existe o no Output:false
let nuevoSaludo = saludo.replace("Hola", "Buenas");
console.log(nuevoSaludo, saludo);
console.log(saludo.toLocaleLowerCase()); //Pasa la mayusculas a minusculas
console.log(saludo.toUpperCase());
console.log(saludo.substring(0, 4)); //Recibe indice inicial e indice final y lo va a imprimir: Output: Hola

//?Quita espacios
let espacios = "   Holaaaa     mundo    ";
console.log(espacios.trim());
console.log(espacios.trimStart());
console.log(espacios.trimEnd());
