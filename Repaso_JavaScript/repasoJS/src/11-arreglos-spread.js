const fruits = ["Manzana", "Platano", "Pera"];
const fruits2 = fruits.concat("Durazno", "Naranja");
console.log(fruits);
console.log(fruits2);

const products = ["Mesa", "Silla", "Cama"];
const clothes = ["Pantalon", "Camisa", "Zapatos"];

//const market = [...fruits, ...products];

const market = [
  ...fruits,
  ...products,
  ...clothes,
  "tv",
  "Computadora",
  "Teléfono",
];

const market2 = fruits2.concat(clothes).concat("Tv", "Computadora", "Teléfono");
console.log(market);
console.log(market2);