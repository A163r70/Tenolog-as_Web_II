const promise = new Promise((resolve, reject) => {
  setTimeout(() =>{
    console.log("Simulando alguna tarea con demora");
  }, 2500);
});