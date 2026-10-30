import { findInvoicesById} from "./data/invoices";

findInvoicesById(2)
  .then((result) => {
    console.log(result);
    console.log("Simulando alguna tarea con demora");
  })
  .catch((error) => {
    console.log(error);
  });

  findInvoicesById(2).then(console.log).catch(console.error);