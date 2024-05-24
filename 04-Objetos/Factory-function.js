function crearUsuario(name, email) {
   return {
      email,
      name,
      activo: true,
      recuperarClave: function () {
         console.log("recuperando clave...");
      },
   };
}

let user1 = crearUsuario("Agus", "Agus@gmail.com");
let user2 = crearUsuario("Feli", "Feli@gmail.com");
console.log(user1, user2);
