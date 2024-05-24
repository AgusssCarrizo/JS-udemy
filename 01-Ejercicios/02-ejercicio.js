function nombreResolucion(ancho, alto) {
   if (ancho >= 7680 && alto >= 4320) {
      console.log("La resolucion es de 8k");
   } else if (ancho >= 3840 && alto >= 2160) {
      console.log("La resolucion es de 4k");
   } else if (ancho >= 2560 && alto >= 1440) {
      console.log("La resolucion es de WQHD");
   } else if (ancho >= 1920 && alto >= 1080) {
      console.log("La resolucion es de FHD");
   } else if (ancho >= 1280 && alto >= 720) {
      console.log("La resolucion es de HD");
   } else {
      console.log("Es aresolucion no existe");
   }
}
let nombre = nombreResolucion(1366, 768);
