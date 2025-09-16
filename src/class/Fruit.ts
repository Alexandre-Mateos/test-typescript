export class Fruit {
    private _name: string | null;

    constructor(name: string) {
        this._name = name;
    }

    describe(): string
    {
        return "Le fruit choisi est : " + this._name + "."
    }

}