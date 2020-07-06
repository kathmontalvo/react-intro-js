
// functions + import + export

import heroes from '../data/heroes';
// import heroes, { owners } from '../data/heroes';
// console.log(owners);

// Usando ARRAY FIND
const getHeroById = (id) => heroes.find( (hero) => hero.id === id );
// console.log(getHeroById(2));


// Usando ARRAY FILTER
const getHeroesByOwner = (owner) => heroes.filter( (hero) => hero.owner === owner );
// console.log(getHeroesByOwner('DC'));

export {
  getHeroById,
  getHeroesByOwner
}