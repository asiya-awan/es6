//Reflect and Prototypes


class Person {
    constructor(name) {
        this.name = name;
    }
}

let person = new Person('Ali')

Person.prototype.age = 27

let proto = {
    age: 29,
    greet() {
        console.log('Hello')
    }
}
Reflect.setPrototypeOf(person, proto)

Object.keys(person).forEach((key) => {
    console.log(`${key}: ${person[key]}`)
})


// Reflect.apply(greet, person, [])  //ERROR -> greet is not defined
Reflect.apply(person.greet, null, [])  


