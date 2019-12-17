class Person {
    constructor(name) {
        this.name = name;
    }
}

function TopObj() {
    this.age = 27;
}
// let person0 = Reflect.construct(Person, ['Max'])
let person1 = Reflect.construct(Person, ['Max'], TopObj)

console.log(`Name: ${person1.name}, Age: ${person1.age}`)


