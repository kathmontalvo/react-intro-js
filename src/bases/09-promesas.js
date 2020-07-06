
// Promesas

import { getHeroById } from './08-functions-imp-exp';

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const heroe = getHeroById(2);
//     resolve(heroe)
//     reject('No se pudo encontrar la rpta')
//   }, 2000);
// });

// promesa.then((res)=>{
//   console.log(res)
// })
// .catch((err)=> console.warn(err))

const getHeroesByAsyncId = (id) => {

  return new Promise((resolve, reject) => {
    
    setTimeout(() => {

      const heroe = getHeroById(id);
      !heroe && reject('No se pudo encontrar el hero');
      resolve(heroe);

    }, 2000);
  });

};

getHeroesByAsyncId(1)
  .then(console.log)
  .catch(console.warn)
  // .then( (hero) => console.log('hero', hero))
  // .catch( (err) => console.warn(err))