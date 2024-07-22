import { Dog } from "./inheritence/Dog.js"
import { Cat } from "./inheritence/Cat.js"

console.clear();

const rexas = new Dog('Rex');
// isspaudina objekta
console.log(rexas);
// isspausdina sakini, kuris yra prie return.
console.log(rexas.intro());
console.log(rexas.voice());

const brisius = new Dog('Brisius');
console.log(brisius);
console.log(brisius.intro());

const rainis = new Cat('Rainis');
console.log(rainis);
console.log(rainis.intro());
console.log(rainis.voice());
