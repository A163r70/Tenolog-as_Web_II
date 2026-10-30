const paper = {
  product: "paper",
  price: 100,
  quantity: 1,
};

const invoices = [
  {
  id: 1,
  name: "Compras de Oficina",
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
    paper,
  ],
  }
];

const invoiceByClient = (clientName) => {
    return invoices.find((i) => i.client.name === clientName);
};

export {
    paper,
    invoices,
    invoiceByClient as default,
};

export const invoiceById = (id) => {
  return invoices.find((i) => i.id === id);
};

export const findInvoicesById = (id) => {
  const promise = new Promise((resolve, reject) => {
  setTimeout(() =>{
    const result = invoiceById(id);

    if(result){
      resolve(result);
    } else {
      reject("Error: No existe la factura con el id ingresado.");
    }
  }, 2500);
});

return promise;
}
