const invoice = {
  id: 10,
  name: "Compras de oficina",
  date: new Date(),
  client: {
    id: 1,
    name: "Addi",
    Lastname: "Toro",
    age: 21,
  },
  total: 1000,
  greeting: function (){
    return `Hola ${this.client.name}`;
  },
}; 

invoice.client.name = "Gabriel";
invoice.total = 5000;
console.log(invoice);

const greeting = invoice.greeting();
console.log(greeting);