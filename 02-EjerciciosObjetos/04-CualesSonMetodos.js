let objetos = {
   id: 1,
   name: "chanchito",
   login: function () {},
   logout: function () {},
};
function cualesSonMetodos(obj) {
   for (let llave in obj) {
      if (typeof obj[llave] === "function") {
         console.log(llave);
      }
   }
}
cualesSonMetodos(objetos);
