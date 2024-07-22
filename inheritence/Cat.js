export class Cat {
    constructor(name) {
        this.name = name;
        this.legscOUNT = 4;
    }
    intro() {
        return `Hello, may name is ${this.name}.`
    }

    voice() {
        return `${this.name}: Au au!! 🐈`
    }

}