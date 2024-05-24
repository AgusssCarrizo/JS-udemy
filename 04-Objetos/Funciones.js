function Usuario(nombre, apellido) {
   this.nombre = nombre;
   this.apellido = apellido;
}

//? Las funciones son objetos de primera clase, por lo que tienen propiedades como objetos

console.log(Usuario.name);
console.log(Usuario.length);

//? Podemos asignarlas a otras variables

const U = Usuario;
let user = new U("Agustin");
let user2 = new U("Raul", "Hernandez");

console.log(user);
console.log(user2);

//? Podemos pasarla como Argumentos a otras funciones
function of(Fn, arg, arg2) {
   return new Fn(arg, arg2);
}

const user1 = of(Usuario, "Manuela", "Hernandez");

console.log(user1);

//? Las funciones pueden ser retornadas en JS
function returned() {
   return function () {
      console.log("Hola mundo");
   };
}
let saludo = returned();
saludo();
