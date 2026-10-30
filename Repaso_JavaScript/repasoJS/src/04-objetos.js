const invoice = {
  id: 10,
  name: "Compras de oficina",
  date: new Date(),
  client: "Alberto Ramírez",
  total: 1000,
}; 

console.log(invoice);
console.log(invoice.name);

invoice.client = "Jugaruiz";
invoice.total = 5000;

console.log(invoice);