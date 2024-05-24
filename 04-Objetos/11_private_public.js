function Usuario() {
   this.name = "Agustin";
   let log = function () {};

   this.guardar = function () {
      log("guardar");
   };
}
const usuario = new Usuario();
