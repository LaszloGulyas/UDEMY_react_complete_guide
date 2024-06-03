class LivingObject {
    constructor() {
        this.isAlive = true;
    }

    die = () => this.isAlive = false;
    reborn = () => this.isAlive = true;
}

export class Person extends LivingObject {
    constructor(name) {
        super();
        this.name = name;
    }

    nameToUpperCase = () => {
        this.name = this.name.toUpperCase();
        return this.name;
    }
}
