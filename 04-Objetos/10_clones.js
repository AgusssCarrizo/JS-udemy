let punto = {
   x: 10,
   y: 15,
};

let clonePunto = Object.assign({}, punto, {z: 20});

console.log(punto);
console.log(clonePunto);

let copiaPunto = Object.assign({}, punto);

console.log(copiaPunto, punto);

let copia3 = {...punto};
console.log(copia3);
