const invoices = [
  {
  id: 1,
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
      product: "Pencil",
      price: 300,
      quantity: 2,
    },
    {
      product: "Table",
      price: 100,
      quantity: 1,
    },
    {
      product: "Chairs",
      price: 300,
      quantity: 10,
    },
  ],
  },
  {id: 2,
  name: "Compras de Computación",
  date: new Date(),
  client: {
    id: 1,
    name: "Héctor",
    Lastname: "Mendez",
    age: 20,
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
      product: "Monitor 17",
      price: 100,
      quantity: 10,
    },
  ],},
  {
    id: 3,
  name: "Compras de Pepelería",
  date: new Date(),
  client: {
    id: 1,
    name: "Juan",
    Lastname: "Bautista",
    age: 26,
  },
  items: [
    {
      product: "Netbook",
      price: 299,
      quantity: 2,
    },
    {
      product: "Pen Drive",
      price: 200,
      quantity: 1,
    },
    {
      product: "Paper",
      price: 100,
      quantity: 10,
    },
  ],
  }
];

const invoicesName = invoices.map((i) => {
  return i.name;
});
console.log(invoicesName);

const invoicesClient = invoices.map((i) => {
  return i.client.name;
});
console.log(invoicesClient);