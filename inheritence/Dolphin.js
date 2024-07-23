import { Fish } from "./Fish.js"

export class Dolphine extends Fish {
    constructor(name) {
        super(name);
        this.animalType = 'dolphine';
        this.sound = 'yyyyy';
        this.emoji = '🐬';
        this.emojiCount = 9;
    }
}