

const characters = ['Noah', 'Agnes', 'Jonas', 'Marta'];
const [ ,,char3 ] = characters
console.log(char3);

const retornaArray = () => {
  return ['ABC', 123];
}

const [letras, numeros] = retornaArray();

console.log(letras, numeros);


// Tarea

const useState = (valor) => {
  return [valor, ()=> console.log('Holis perrito')];
}
const [nombre, setNombre] = useState('Boddy');
console.log(nombre);
setNombre()


