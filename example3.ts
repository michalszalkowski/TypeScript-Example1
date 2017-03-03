interface Person {
    name: string,
    age?: number
}

function logPerson(person: Person) {
    console.log(person.name);
}

logPerson({name: "Michal", age: 18});
logPerson({name: "Marta"});