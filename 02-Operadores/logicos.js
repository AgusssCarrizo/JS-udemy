//* AND, OR, NOT

//? AND (&&)
//? Retorna TRUE si ambos operadores son verdaderos
let edad = 16;
let sexo = "masculino";
if (edad >= 18 && sexo == "masculino") {
   console.log("Bienvenido");
} else {
   console.log("Andate"); //!Ejecuta este codigo
}

//? OR (||)
//? Retorna TRUE si al menos uno de los operadores es verdadero

if (edad >= 18 || sexo == "masculino") {
   console.log("Bienvenido"); //!Ejecuta este codigo
} else {
   console.log("Andate");
}

//? NOT (!)
//? Retorna TRUE si el operador es falso

console.log(!true); //! false
