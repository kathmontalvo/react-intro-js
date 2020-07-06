
//Objetos literaales

const persona = {
  name: 'Body',
  lastName: 'Perrito',
  age: 4,
  address: {
    piso: 3,
    distrito: 'Chorrillos'
  }
};

// console.table({persona});
console.log({persona});

//para crear un clon, lo recomendable:

const persona2 = { ...persona };
persona2.name = 'Piero';

console.log(persona)
console.log(persona2)