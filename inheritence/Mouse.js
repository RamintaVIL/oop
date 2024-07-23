import { Pet } from "./Pet.js"

export class Mouse extends Pet {
    constructor(name) {
        super(name);
        this.animalType = 'mouse';
        this.sound = 'cyp';
        this.emoji = '🐭';
        this.emojiCount = 3;
    }
}