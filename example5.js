var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Animal = (function () {
    function Animal(name) {
        this.name = name;
        this.type = "animal";
    }
    Animal.prototype.toString = function () {
        return this.name + ": " + this.type;
    };
    return Animal;
}());
var Person = (function (_super) {
    __extends(Person, _super);
    function Person(name) {
        _super.call(this, name);
        this.type = "person";
    }
    return Person;
}(Animal));
var animal = new Animal("dog");
console.log(animal.toString());
var michal = new Person("michal");
console.log(michal.toString());
