import { Bird } from "./Bird.js"

export class Eagle extends Bird {
    constructor(name) {
        super(name);
        this.animalType = 'eagle';
        this.sound = 'griebsiu';
    }
}