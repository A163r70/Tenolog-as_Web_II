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
  items: [
    {
      product: "Keyboard",
      price: 299,
      quantity: 2,
    },
    {
      product: "Mouse",
      price: 200,
      quantity: 1,
    },
    {
      product: "Paper",
      price: 100,
      quantity: 10,
    },
  ],
  total: function () {
    let total = 0;

    this.items.forEach((item) => {
      total = total + item.price * item.quantity;
    });
    return total;
  },
  greeting: function () {
    return `Hola ${this.client.name}`;
  },
};

//Clonamos al objeto invoice mediante el operador spread, de esta manera se crea un nuevo objeto con las mismas propiedades 
// y valores que el objeto original. Esto es útil para evitar la mutación del objeto original al trabajar con copias.
const invoice2 = {...invoice};
//const invoice2 = invoice;
const result = invoice == invoice2;
console.log(result);

if(result){
  console.log("Son iguales");
} else {
  console.log("No son iguales");  
}

invoice2.id = 20;
console.log(invoice.id);
console.log(invoice2.id);