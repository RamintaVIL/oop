export class IsValid {
    static username(str) {
        if (typeof str !== 'string') {
            return false;
        }
        if (str.length < 4) {
            return false;
        }

    }
}


// username
// email
// phone
// name
// surname
// pasword
// IBAN
// URL
// URL slug - viena dalis tarp /. pvz straipsnis, top-5-patiekalai-per-sv-kaledas
// <h1> TOp 5 patiekalai per šv. Kalėdas</h1>
// https://www.maujienos.lt/straipsnis/top-5-patiekalai-per-sv-kaledas