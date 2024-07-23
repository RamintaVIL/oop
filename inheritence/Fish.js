import { Animal } from "./Animal.js";

export class Fish extends Animal {
    constructor(name) {
        super(name);
        this.emoji = '🐠';
    }
}