//Reflect API - metaprogramming

class Person {
    constructor(name,age) {
      this._name = name;
      this.age = age;
    }
    get name() {
      return this._name
    }
    set name(value) {
      this._name = value
    }
    
    greet() {
      console.log('Hello, '+this.name)
    }
  }
  
  let mum = {
    _name: 'Mum'
  }
  
  let person = new Person('Max', 27)
  
  Reflect.set(person, 'name','Anna', mum)
  
//   console.log(mum)
//   console.log(person._name)
  
//   console.log(Reflect.get(person,'name'))
//   console.log(Reflect.get(person,'name', mum))
  
//   console.log(Reflect.has(person,'name'))

  
  
console.log(Reflect.isExtensible(person))   //true
  Reflect.defineProperty(person, 'hobbies', {
    writable: false,
    configurable:false,
    value:["cricket", "cooking"],
    enumerable:false
  })
  console.log(person.hobbies.push('Luddo'))  
   console.log(person.hobbies.length)

   Reflect.preventExtensions(person)

   console.log(Reflect.isExtensible(person))   //false
  
   Reflect.defineProperty(person, 'experties', {
    writable: false,
    configurable:false,
    value:["one", "two"],
    enumerable:false
  })   
  console.log(person.experties)  // undefined - not extensible
  
  console.log(Reflect.ownKeys(person))
  
  
  //console.log(person.hobbies)
  //person.hobbies.pop()
  person.hobbies = ["ab","bc","cd","ef","gh"]
  console.log(person.hobbies.length)
  
  Reflect.deletePropery(person, 'name')
  for(let e of person.hobbies){
    console.log(e)
  }
  
  
  
  
  
  
  
  