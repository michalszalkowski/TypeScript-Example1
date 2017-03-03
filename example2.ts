function log(string: String): void {
    console.log("log: " + string);
}

function getName(): string {
    return "Michał";
}

function getNumber(): number {
    return 1;
}

function isValid(): boolean {
    return true;
}

log("test");
console.log(2, getName());
console.log(3, getNumber());
console.log(4, isValid());