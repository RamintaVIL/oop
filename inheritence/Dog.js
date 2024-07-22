export class Dog {
    constructor(name) {
        this.name = name;
        this.legsCount = 4;
    }

    intro() {
        return `Hello, may name is ${this.name}.`
    }

    voice() {
        return `${this.name}: Au au!! 🐶`
    }
}