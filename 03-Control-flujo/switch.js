//? Switch
//* switch(accion) {case 1: break; case 2: break; default: break;}

let accion = "listar";

switch (accion) {
   case "listar":
      console.log("Listando...");
      break;
   case "guardar":
      console.log("Guardando...");
   default:
      console.log("Acción no reconocida");
}
