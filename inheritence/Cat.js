import { Pet } from "./Pet.js"


export class Cat extends Pet {
    // copy pasta Pet() - logika visa. Jame yra:
    // constructor() {}
    // intro() {}
    // voice() {}
    constructor(name, bread) {
        // kadangi extendiname tevine class, norint su juo dirbti, tai pas vaika reikia prirasyti super();
        // ir is naujo reikia prisirasyti name.
        super(name);
        this.bread = bread;
        this.animalType = 'cat';
        this.sound = 'miau';
        this.emoji = '🐈';
        this.emojiCount = 2;
    }
}