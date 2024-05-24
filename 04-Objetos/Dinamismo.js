const user = {
   id: 1,
   name: "Nico",
};

user.userName = "Giato";
user.age = 22;
user.guardar = function () {
   console.log("Guardando...", this.age);
};

user.guardar();

delete user.name;
delete user.userName;

user.userName = "Manuel";
delete user.userName;
console.log(user);

//* freeze no se le puede cambiar ni agregar valores
//!const user1 = Object.freeze({id: 1});

//* seal no se le puede agregar valores pero si cambiarlos
const user1 = Object.seal({id: 1});

user1.id = 2;

user1.name = "Agus";
console.log(user1);
