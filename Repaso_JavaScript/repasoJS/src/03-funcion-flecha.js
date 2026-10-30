const sayhello = (name = "Alberto", edad = 21) => 
  `Hola mundo function! ${name} edad ${edad}`;
//const add = (a = 0, b = 0) => a + b;

const result = sayhello("Addi", 80);
console.log(result);
//console.log(add(5, 10));