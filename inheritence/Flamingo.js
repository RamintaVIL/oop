import { Bird } from "./Bird.js";

export class Flamingo extends Bird {
    constructor(name) {
        super(name);
        this.animalType = 'flamingo';
        this.sound = 'ke';
        this.emoji = '🦩';
    }
}