// kai viska istriname, susiinportuojame Pet pas Dog.
import { Pet } from "./Pet.js";

// kuriama klase Dog nukopijuoja visa logika, kuri yra aprasyta Pet.js
export class Dog extends Pet {
    // constructor(name) {
    //     this.name = name;
    //     this.legsCount = 4;
    //     this.animalType = 'dog';
    //     this.sound = 'au';
    //     this.emoji = '🐶';
    //     this.emojiCount = 4;
    // }

    // intro() {
    //     return `Hello, I'm a ${this.animalType} and may name is ${this.name}.`
    // }

    // voice() {
    // sis sakinys pakeite pries tai buvusi return `${this.name}: Au au!! 🐶🐶🐶🐶
    //     return `${this.name}: ${this.sound}!! ${this.emoji.repeat(this.emojiCount)}`
    // }
    constructor(name, bread) {
        super(name, bread);
        this.animalType = 'dog';
        this.sound = 'au';
        this.emoji = '🐶';
        this.emojiCount = 4;
    }
}