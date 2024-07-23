import { Bird } from "./Bird.js"

export class Pigeon extends Bird {
    constructor(name) {
        super(name);
        this.animalType = 'pigeon';
        this.sound = 'kur';
        this.emoji = '🐦‍⬛';
    }
}