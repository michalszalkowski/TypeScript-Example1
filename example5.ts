class Animal {

    private name: string;
    protected type: string;

    constructor(name: string) {
        this.name = name;
        this.type = "animal";
    }

    public toString(): string {
        return this.name + ": " + this.type;
    }
}

class Person extends Animal {
    constructor(name: string) {
        super(name);
        this.type = "person";
    }
}

var animal = new Animal("dog");
console.log(animal.toString());

var michal = new Person("michal");
console.log(michal.toString());