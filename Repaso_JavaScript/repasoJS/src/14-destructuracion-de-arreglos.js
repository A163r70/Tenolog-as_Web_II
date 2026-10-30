const users = [
  "Juan",
  "Alberto",
  "Addi",
  "Héctor",
  "Bryan",
  "Carlos",
  "Jorge",
];

//desestructuración de arreglos
//const [nom1, nom2, nom3, , , nom6] = users;
//console.log(nom1, nom2, nom3, nom6);

const [nom1, nom2, nom3, ...restNom] = users;
console.log(nom1, nom2, nom3, ...restNom);