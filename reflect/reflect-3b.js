//calling functions w/ Reflect.apply

class Person {
    constructor(name,age) {
      this.name = name;
      this.age = age;
    }

    
    greet() {
      console.log('Hello, '+this.name)
    }
  }

//   let person = new Person('Max', 27)
  let person = Reflect.construct(Person, ['Max', 27])
//   person.greet();


//apply(func, thisObj, argumentFunc)
Reflect.apply(person.greet, person, [])  // Hello Max


Reflect.apply(person.greet, {},[]) 
Reflect.apply(person.greet, {name: 'Anna'},[]) 


