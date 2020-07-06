
// Desestructuración
// Asignación destructurante

const persona = {
  name: 'Boddy',
  age: 4,
  password: 'Huesitos',
}

// const { name: nombre2 } = persona
// console.log(nombre2);

const { name, age, password } = persona

console.log(name, age, password)

const useContext = ( { name, age, range = 'Captain', password } ) => {
  // console.log( name, age, range )
  return {
    nombreClave: password,
    agePet: age*7,
    latlng: {
      lat: 14.125463,
      lng: -12.13541
    }
  }
}

const { nombreClave, agePet, latlng:{ lat, lng } } = useContext(persona);

console.log(nombreClave, agePet)
console.log(lat, lng)
