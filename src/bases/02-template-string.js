
// Template Strings

const name = 'Kath';
const lastName = 'Montalvo';

// const fullName = name + ' ' + lastName;
const fullName = `${name} ${lastName}`;

console.log(fullName)

function getGreeting (name) {
  return 'Holis ' + name
}

console.log( `Mi saludito: ${getGreeting(fullName)}` )