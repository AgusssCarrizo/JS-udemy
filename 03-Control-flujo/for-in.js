const pantalla = document.querySelector(".div");
const button = document.querySelector(".btn");
const button2 = document.querySelector(".cerrar");

let users = [
   {
      id: 1,
      name: "Agus",
      age: 21,
   },
   {
      id: 2,
      name: "John",
      age: 30,
   },
   {
      id: 3,
      name: "Sarah",
      age: 25,
   },
];

function verContenido() {
   let contenido = "";
   for (let user of users) {
      for (let propiedad in user) {
         contenido += `${propiedad}: ${user[propiedad]}`;
      }
      contenido += "<br>";
   }
   pantalla.innerHTML = contenido;
   pantalla.classList.add("div-rojo");
}

button.addEventListener("click", verContenido);
button2.addEventListener("click", () => {
   pantalla.innerHTML = "";
   pantalla.classList.remove("div-rojo");
});
