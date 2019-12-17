//Reflect and Prototypes


class Person {
    constructor(name) {
        this.name = name;
    }
}

let person = new Person('Ali')


console.log(Reflect.getPrototypeOf(person)) //safe and recomm way to access obj protototype

console.log(Reflect.getPrototypeOf(person) == Person.prototype)  //prefer method is use getPrototypeOf
console.log(person.__proto__ == Person.prototype)  //not good to access in ES5

let proto = {
    age: 29
}
Reflect.setPrototypeOf(person, proto)

console.log(Reflect.getPrototypeOf(person))
console.log(Reflect.getPrototypeOf(person) == Person.prototype)  //prefer method is use getPrototypeOf
console.log(Reflect.getPrototypeOf(person) == proto.prototype)  //prefer method is use getPrototypeOf
