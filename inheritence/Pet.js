// turime jau 2 failus su naminiais gyvunais, tai apsirasome bendrai, ka reiskia buti naminiu gyvunu.
export class Pet {
    constructor(name, bread) {
        this.name = name;
        this.bread = bread;
        this.legsCount = 4;
        this.animalType = '';
        this.sound = '';
        this.emoji = '';
        this.emojiCount = 1;
    }

    intro() {
        return `Hello, I'm a ${this.animalType} and may name is ${this.name}.`
    }

    voice() {
        return `${this.name}: ${this.sound}!! ${this.emoji.repeat(this.emojiCount)} - ${this.bread}`
    }
}
// Sekantis zingsnis Dog ir Cat faile viska istrinti, Dog faile uzsikomentavau, kad bet kada matyciau kaip buvo. 
// Ir lieka tik export class Dog {}