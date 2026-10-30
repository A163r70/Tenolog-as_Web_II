const user = {
  name: "Alberto",
  age: 21,
  email: "beto@gmail.com",
  ranking: 9,
};

//desestructuración de objetos en funciones
//Método 1

const detail = (user) => {
  const {name, age, ranking} = user;
  console.log(`${name} ${age} ${ranking}`);
};

detail(user);
