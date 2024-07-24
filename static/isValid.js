export class IsValid {
    static requiredLengthString(str, minLength, maxLength) {
        if (typeof str !== 'string') {
            return false;
        }
        if (str.length < minLength) {
            return false;
        }
        if (str.length > maxLength) {
            return false;
        }
        return true;
    }

    static containsAllowedSymbols(str, allowedSymbols) {
        for (const symbol of str) {
            if (!allowedSymbols.includes(symbol)) {
                return false;
            }
        }
        return true;
    }

    static doesNotcontainsAllowedSymbols(str, allowedSymbols) {
        for (const symbol of str) {
            if (!allowedSymbols.includes(symbol)) {
                return false;
            }
        }
        return true;
    }



    static username(str) {
        const minLength = 4;
        const maxLength = 20;
        const abc = '0123456789abcdefghijklmnopqrstuvwxyzASDFGHJKLPOIUYTREWQZXCVBNM'

        if (IsValid.requiredLengthString(str, minLength, maxLength)) {
            return false;
        }

        // 0123456789abcdefghijklmnopqrstuvwxyzASDFGHJKLPOIUYTREWQZXCVBNM

        if (IsValid.containsAllowedSymbols(str, abc)) {
            return false;
        }
        return true;
    }

    // pirminis varinatas, jis yra ilgesnis, pasidereme auksciau sablona, kuri taikome.    
    // static username(str) {
    //     const minLength = 4;
    //     const maxLength = 20;

    //     if (typeof str !== 'string') {
    //         return false;
    //     }
    //     if (str.length < minLength) {
    //         return false;
    //     }
    //     if (str.length > maxLength) {
    //         return false;
    //     }
    //     return true;
    // }

    static email(str) {
        const minLength = 6;
        const maxLength = 50;
        const abc = '0123456789abcdefghijklmnopqrstuvwxyzASDFGHJKLPOIUYTREWQZXCVBNM@.-_+'

        if (IsValid.requiredLengthString(str, minLength, maxLength)) {
            return false;
        }
        if (IsValid.containsAllowedSymbols(str, abc)) {
            return false;
        }
        return true;
    }

    static phone(str) {
        const minLength = 3;
        const maxLength = 20;
        const abc = '+-0123456789 ()';

        // 00370 (6) 123 457;
        if (IsValid.requiredLengthString(str, minLength, maxLength)) {
            return false;
        }
        if (IsValid.containsAllowedSymbols(str, abc)) {
            return false;
        }
    }

    static name(str) {
        const minLength = 2;
        const maxLength = 20;
        const abc = '0123456789!?-+:;\\`@#$%^&/*()=_{}[]<>,.~\'"\r\n\t';

        if (IsValid.requiredLengthString(str, minLength, maxLength)) {
            return false;
        }
        if (IsValid.doesNotcontainsAllowedSymbols(str, abc)) {
            return false;
        }
    }

    static surname(str) {
        const minLength = 3;
        const maxLength = 20;

        if (IsValid.requiredLengthString(str, minLength, maxLength)) {
            return false;
        }
    }

    static password(str) {
        const minLength = 12;
        const maxLength = 100;

        if (IsValid.requiredLengthString(str, minLength, maxLength)) {
            return false;
        }
    }

    static IBAN(str) {
        const minLength = 20;
        const maxLength = 24;

        if (IsValid.requiredLengthString(str, minLength, maxLength)) {
            return false;
        }
    }

    static URL(str) {
        // https://www.puslapis.lt
        // https://www.puslapis.lt/

        // https://www.puslapis.lt/x
        // https://www.puslapis.lt/x/

        // https://www.puslapis.lt/musu-paslaugos
        // https://www.puslapis.lt/musu-paslaugos/
        const minLength = 2;
        const maxLength = 3000;
        if (IsValid.requiredLengthString(str, minLength, maxLength)) {
            return false;
        }
    }

    /*
    Input: TOP 5 - Patiekalai per Šv. Kalėdas!
    Output: top-5-patiekalai-per-sv-kaledas
    */
    static urlSlug(str) {
        // https://www.puslapis.lt/////////////
        const minLength = 1;
        const maxLength = 150;

        if (typeof str !== 'string') {
            return false;
        }
        if (str.length < minLength) {
            return false;
        }
        if (str.length > maxLength) {
            return false;
        }
        return true;
    }
}


// username
// email: a@a.lt; a@x.ee; a@x.com
// phone
// name
// surname
// pasword
// IBAN
// URL
// URL slug - viena dalis tarp /. pvz straipsnis, top-5-patiekalai-per-sv-kaledas
// <h1> TOp 5 patiekalai per šv. Kalėdas</h1>
// https://www.naujienos.lt/straipsnis/top-5-patiekalai-per-sv-kaledas