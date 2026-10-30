/*function sayhello(name = "Alberto", edad =50) {
  const greeting = `Hola mundo function! ${name} edad ${edad}`;
  //console.log("Hola mundo function!!!");

  return greeting;
}

//sayhello();

//const result = sayhello("Addi", 22);
//console.log(result);
console.log(sayhello("Juan"));*/

const sayhello = function (name = "Alberto", edad = 50) {
  const greeting = `Hola mundo function! ${name} edad ${edad}`;
  //console.log("Hola mundo function!!!");

  return greeting;
}

const result = sayhello("Addi");
console.log(result);