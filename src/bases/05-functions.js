
// Funciones en JS

const greeting = function (name) {
  return `Holis ${name}`;
}

const greeting2 = (name) => {
  return `Holis ${name}`;
}

const greeting3 = (name) => `Holis ${name}`;

// console.log(greeting('Boddyto'));
console.log(greeting3('Boddyto perrito'));

const getUser = () => ({
  user: 'ABC123',
  username: 'Katy_666'
})

console.log(getUser());

// Tarea

const getActiveUser = (name) => ({
  uid: 'ABC567',
  username: name,
});

const activeUser = getActiveUser('Boddy_perrito_666');

console.log(activeUser);
