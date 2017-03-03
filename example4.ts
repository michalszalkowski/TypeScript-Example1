class Person {
    name: String
}
var michal = new Person();

michal.name = "Michał";
console.log(michal);

// --------------------

class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

var dog = new Animal("Dog");
console.log(dog);

// --------------------

class Building {
    private name: String = "no name";
    public setName(name: String): void {
        this.name = name;
    }
}

var shop = new Building();
shop.setName("Shop");

console.log(shop);
