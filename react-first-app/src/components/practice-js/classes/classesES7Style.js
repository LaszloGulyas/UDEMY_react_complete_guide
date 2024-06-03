class LivingObject {
    isAlive = true;

    die = () => this.isAlive = false;
    reborn = () => this.isAlive = true;
}

export class PersonOther extends LivingObject {
    name;

    nameToUpperCase = () => {
        this.name = this.name.toUpperCase();
        return this.name;
    }
}
