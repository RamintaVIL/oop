/*
 Automobiliai:
 - konvertavimas is km i mylias

 Finansai:
 - konvertavimas is EUR i USD
 
 Matematika:
 - Suma
 - Skirtumas
 - Daugyba
 - Dalyba

 Tekstas:
 - pirmasis simbolis
*/

class Tekstas {
    static firstSymbol(str) {
        // jei davei tuscia simboli, tai grazina tuscia stringa. 
        return str[0] ?? '';
    }
    static lastSymbol(str) {
        return str.at(-1) ?? '';
    }
}
console.log(Tekstas.firstSymbol('Labas'));
console.log(Tekstas.firstSymbol('Rytas'));

console.log(Tekstas.lastSymbol('Labas'));
console.log(Tekstas.lastSymbol('Rytas'));

// paprastoji funkcija
function firstSymbol(str) {
    return str[0] ?? '';
}
console.log(firstSymbol('Labas'));
console.log(firstSymbol('Rytas'));

function lastSymbol(str) {
    return str.at(-1) ?? '';
}
console.log(lastSymbol('Labas'));
console.log(lastSymbol('Rytas'));

// static metoduose ateina auto complete, kai pasirasau Tekstas. O naudojant f-cija reiketu prisiminti visu pavadinimus.
