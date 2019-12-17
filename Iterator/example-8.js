let obj = {
    name :"Asia",
    city: 'winni',
    hobbies: ['cricket','cooking'],
    
}

// Not best solution; Modifying the prototype unless its a polyfill is always a terrible idea
// It is possible to do the same thing on the Object.prototype object And have a general iterator for all objects
Object.prototype[Symbol.iterator] = function*() {
        for(let key of Object.keys(this)) {
         yield([ key, this[key] ])
       } }

for(let key in obj) {

    console.log(`${key}, value: ${obj[key]}`)
}