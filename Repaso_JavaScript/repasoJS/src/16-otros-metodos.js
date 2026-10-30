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

//Método map nos devuelve un nuevo arreglo con la misma cantidad de elementos que el arreglo original, 
// pero con los elementos transformados según la función que le pasemos como argumento.
const invoicesName = invoices.map((i) => {
  return i.name;
});
console.log(invoicesName);

const invoicesClient = invoices.map((i) => {
  return i.client.name;
});
console.log(invoicesClient);

//El método find va a devolver el primer elemento que cumpla con la condición que le pasemos como argumento.
const invoiceById = invoices.find((i) => {
  return i.id === 3;
});
console.log(invoiceById);

const invoiceByName = invoices.find((i) => {
  return i.name === "Compras de Oficina";
});
console.log(invoiceByName);

const invoiceByCliente = invoices.find((i) => {
  return i.client.name === "Juan";
});
console.log(invoiceByCliente);

export default (clientName) => {
    return invoices.find((i) => i.client.name === clientName);
};

//El método filter() va a devolver un nuevo arreglo con todos los elementos que cumplan con la condición que le pasemos 
// como argumento.
console.log("Aplicación del Método filter por id");
const invoicesFilter = invoices.filter((i) => i.id > 1);
console.log(invoicesFilter);

//EL método includes() nos va a devolver un booleano dependiendo si el elemento que le pasemos como argumento se 
// encuentra en el arreglo o no.
const invoicesFilter2 = invoices.filter((i) => i.items.includes(paper));
console.log(invoicesFilter2);


//El método some nos va a devolver un booleano dependiendo si al menos un elemento del arreglo cumple con la 
// condición que le pasemos como argumento.
const resutl = invoices.some((i) => i.client.name === "Juan");
console.log(resutl);