const saludo = "Hola mundo \n como estas";

const nombre = "agustin";
const plantilla = `Hola ${nombre}
bienvenidos a 
Ultimate Javascript`;

const plantilla2 = (nombre) => {
   return `Hola ${nombre}
  bienvenidos a 
  Ultimate Javascript`;
};
console.log(plantilla2("Marcos"));
