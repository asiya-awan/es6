//creting custom Iterable objects
let obj = {
    name :"Asia",
    city: 'winni',
    hobbies: ['cricket','cooking']
}

// Make an object an Iterable by assigning to it’s mystical @@iterator property through the Symbol.iterator property.
obj[Symbol.iterator]= () => ({
    next: function next () {
    return {
        done: Object.keys(this).length === 0,
        value: Object.keys(this).shift()
        }
    }
})
        
for(key in obj){
    console.log(key)
}


// for(let o of obj) {
//     console.log(o)
// }
