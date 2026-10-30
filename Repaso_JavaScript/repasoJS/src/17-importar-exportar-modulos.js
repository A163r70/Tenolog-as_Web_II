//import {invoices, paper, invoiceByClient} from "./data/invoices";
import invoiceByClient, { paper, invoices } from "./data/invoices";

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

console.log("Buscar por nombre de clientes: ")
console.log(invoiceByClient("Héctor"));