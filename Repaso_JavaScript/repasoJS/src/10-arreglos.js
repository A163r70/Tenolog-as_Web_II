const fruits = new Array("Manzana", "Platano", "Pera");
//const fruits = ["Manzana", "Platano", "Pera"];
fruits.push("Durazno", "Naranja");
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log("");

fruits.forEach((fruit) => {
  console.log(fruit);
});

console.log("");
for (const fruit of fruits){
  console.log(fruit);
};

console.log("");

for(let index = 0; index < fruits.length; index++){
  //const element = arrar[index];
  console.log(fruits[index]);
}