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


invoice.client.name = "Gabriel";
console.log(invoice);
console.log(`Total: ${invoice.total()}`);