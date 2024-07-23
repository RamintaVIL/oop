export class Fish {
    constructor(name) {
        this.name = name;
        this.animalType = '';
        this.finCount = '3';
        this.sound = '';
        this.emoji = '🐠';
        this.emojiCount = 1;
    }

    intro() {
        return `Hello, I'm a ${this.animalType} and may name is ${this.name}.`
    }

    voice() {
        return `${this.name}: ${this.sound}!! ${this.emoji.repeat(this.emojiCount)} - ${this.bread}`
    }
}