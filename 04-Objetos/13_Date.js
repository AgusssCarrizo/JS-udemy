const ahora = new Date();
console.log(ahora);

//Fecha
const fecha = new Date("December 11 1986 15:15 GMT-0300");
console.log(fecha);
console.log(fecha.toDateString()); //Fecha en formato mas corto
console.log(fecha.toISOString()); //Muy importante para enviar al servidor
console.log(fecha.toTimeString()); //Muestra la hora

console.log(fecha.getFullYear());
fecha2 = fecha.setFullYear(2000);
console.log(fecha2);

//? Se debe utilizar el get para obtener diferente informacion en la fecha .get
//? Se debe utilizar el metodo set para cambiar la informacion
