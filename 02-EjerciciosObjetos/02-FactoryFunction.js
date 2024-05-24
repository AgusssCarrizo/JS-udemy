function createUsuario(name) {
   return {
      id,
      name,
   };
}
let id = Math.random();
let user = createUsuario("Felipe");
let user2 = createUsuario("Raul");
console.log(user, user2);
