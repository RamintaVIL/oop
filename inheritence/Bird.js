import { Animal } from "./Animal.js";


export class Bird extends Animal {
    constructor(name) {
        super(name);
        this.emoji = '🦅';
    }
}
