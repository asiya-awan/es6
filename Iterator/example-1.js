let  array = [1,2,,3,4]
let string ="Asia"

//objects aren't iterable
let obj = {name: 'asia', city: 'winnipeg'}

console.log(typeof string[Symbol.iterator])  //function
console.log(typeof array[Symbol.iterator])  //function
console.log(typeof obj[Symbol.iterator])  //undefined


let array_it = array[Symbol.iterator]()
let string_it = string[Symbol.iterator]()



console.log(array_it.next())
console.log(array_it.next())
console.log(array_it.next())