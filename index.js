// Kadangi eksportas yra vardinis, nepamiršti {}.
// Svarbu, json faile prisirašyti type="module", kad leistu importuoti modernia sintakse.

import { Dog } from "./js/Dog.js" ;

// su zodeliu new Dog() - pagimdome konkretų šunį.
// rašydami rexas.name - per padėtą tašką galime išsitraukti objektą.
const rexas = new Dog('Rexas', 'black', 3);
console.log(rexas);
console.log(rexas.furColor);
console.log(rexas.name);
// rexas yra objektas.hi -  mano sugalvotas metodas. 
console.log(rexas.hi());
console.log(rexas.think());
console.log(rexas.addNumbers(7, 5));
console.log(rexas.manyBones(2));

// const brisius = new Dog('Brisius', 'white');
// console.log(brisius);

// mūsų pažįstamas objektas.
// const lape = {
//     name: 'Snape',
// }


