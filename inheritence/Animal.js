export class Animal {
    constructor(name, bread) {
        this.name = name;
        this.bread = bread;
        this.legsCount = 4;
        this.finCount = 3;
        this.wingsCount = 2;
        this.animalType = '';
        this.sound = '';
        this.emoji = '';
        this.emojiCount = 1;
    }
    intro() {
        return `Hello, I'm a ${this.animalType} and my name is ${this.name}.`
    }

    voice() {
        if (this.animalType === this.bread) {
            return `${this.name}: ${this.sound}!! ${this.emoji.repeat(this.emojiCount)} - ${this.bread}`
        } else {
            return `${this.name}: ${this.sound}!! ${this.emoji.repeat(this.emojiCount)}`
        }
    }
}