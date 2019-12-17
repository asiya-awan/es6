class Person {
    constructor(name) {
        this.name = name;
    }
}

let person0 = Reflect.construct(Person, ['Max'])
let person1 = new Person('Max');

console.log(person0 instanceof Person)
console.log(person1 instanceof Person)

console.log(person0.__proto__ === Person.prototype)
console.log(person1.__proto__ === Person.prototype)

console.log(person0.__proto__ === person1.__proto__)


