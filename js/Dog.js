// Šis failas parašytas iš didžiosios raidės, nes nurodo kaip bus programuojama šio failo viduje, šiuo atveju objektinis programavimas, tiek kiek leidžia JS.
// Jei failuose yra aprašomos class, nesumaišyti su css, bus iš didžiosios.

// tam kad būtų galima naudotis kituose failuose, funkcija reikia gebėti eksportuoti.

// Objektinis programavimas:

// export class Dog() skliaustai NESIRAŠO.
export class Dog {
// constructor() - yra metodas. Ir tie skliaustai yra parametrų blokas, per kurį gausiu informaciją.
// cia apsiraseme ką mes galime žinoti apie šunį
   constructor(vardas, kailioSpalva, amzius) {
        this.name = vardas;
        this.furColor = kailioSpalva;
        this.age = amzius;
        this.legsCount = 4;
        // console.log(vardas);

    }
   // o cia ką šuo gali daryti. Kuriame savo metodus.
    hi() {
        return 'Suo  sako au au!!';
    }
    think() {
        return 'Suo  galvoja: 🦴🦴🦴';
    }
    addNumbers(a, b) {
        return `Suo suskaiciavo ${a} + ${b} = ${a + b}.`;
    }
    manyBones(count) {
        return `Many bones: ${'🦴'.repeat(count)}`;
    }
}

