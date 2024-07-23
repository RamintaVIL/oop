import { Dog } from "./inheritence/Dog.js";
import { Cat } from "./inheritence/Cat.js";
import { GoldenFish } from "./inheritence/GoldenFish.js";
import { Shark } from "./inheritence/Shark.js";
import { Mouse } from "./inheritence/Mouse.js";
import { Dolphine } from "./inheritence/Dolphin.js";
import { Eagle } from "./inheritence/Eagle.js";
import { Flamingo } from "./inheritence/Flamingo.js";
import { Pigeon } from "./inheritence/Pigeon.js";

console.clear();

const rexas = new Dog('Rex', 'aviganis');
// isspaudina objekta
console.log(rexas);
// isspausdina sakini, kuris yra prie return.
console.log(rexas.intro());
console.log(rexas.voice());

const brisius = new Dog('Brisius', 'taksas');
// console.log(brisius);
console.log(brisius.intro());
console.log(brisius.voice());

const rainis = new Cat('Rainis', 'bengalu');
// console.log(rainis);
console.log(rainis.intro());
console.log(rainis.voice());

const tom = new Cat('Tom', 'animacinis');
console.log(tom.voice());

const nemo = new GoldenFish('Nemo');
// console.log(nemo);
console.log(nemo.intro());
console.log(nemo.voice());

const zydrius = new GoldenFish('Zydrius');
// console.log(zydrius);
console.log(zydrius.intro());
console.log(zydrius.voice());

const bedantis = new Shark('Bedantis');
// console.log(bedantis);
console.log(bedantis.intro());
console.log(bedantis.voice());

const jerry = new Mouse('Jerry');
// console.log(jerry);
console.log(jerry.intro());
console.log(jerry.voice());

const vilis = new Dolphine('Laukinis Vilis');
console.log(vilis.intro());
console.log(vilis.voice());

const karalius = new Eagle('Karalius');
console.log(karalius.intro());
console.log(karalius.voice());

const fabijus = new Flamingo('Fabijus');
console.log(fabijus.intro());
console.log(fabijus.voice());

const trupinys = new Pigeon('Trapus');
console.log(trupinys.intro());
console.log(trupinys.voice());
