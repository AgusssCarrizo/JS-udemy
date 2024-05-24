let objetos = {
   id: 1,
   name: "chanchito",
   login: function () {},
   logout: function () {},
};

let propiedad = "name";
// function tieneProp(obj, propiedad) {
//    if (propiedad in objetos) {
//       return true;
//    }
//    return false;
// }

function tieneProp(obj, propiedad) {
   let props = Object.keys(obj);
   for (let prop of props) {
      if (propiedad == prop) {
         return true;
      }
   }
   return false;
}
console.log(tieneProp(objetos, propiedad));
