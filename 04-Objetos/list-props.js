const punto = {
   x: 10,
   y: 15,
   dibujar() {
      console.log("dibujando...");
   },
};

//delete punto.dibujar;
if ("dibujar" in punto) punto.dibujar();
//imprime el metodo

//console.log(Object.keys(punto));

//!Metodos de clases
for (let llave of Object.keys(punto)) {
   console.log(llave, punto[llave]);
}

for (entry of Object.entries(punto)) {
   console.log(entry);
}

//*Codigo nuevo
for (let llave in punto) {
   console.log(llave, punto[llave]);
}
