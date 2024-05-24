//? Convencion en las funciones constructoras, Uppercas (Mayuscula)
// {id:1, recuperarClave: function (){}}
function Usuario() {
   this.id = 1;
   //* Ya no se denominan funciones, sino metodos
   this.recuperarClave = function () {
      console.log("recuperando clave");
   };
}

let usuario = new Usuario();
console.log(usuario);

//!New
//* Se crea objeto literal del aire, luego se vincula el prototipo de la funcion Usuario con el prototipo, luego el objeto vacio que se acaba de crear del aire se le asigna a this.
