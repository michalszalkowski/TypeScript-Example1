var Person = (function () {
    function Person() {
    }
    return Person;
}());
var michal = new Person();
michal.name = "Michał";
console.log(michal);
// --------------------
var Animal = (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var dog = new Animal("Dog");
console.log(dog);
// --------------------
var Building = (function () {
    function Building() {
        this.name = "no name";
    }
    Building.prototype.setName = function (name) {
        this.name = name;
    };
    return Building;
}());
var shop = new Building();
shop.setName("Shop");
console.log(shop);
