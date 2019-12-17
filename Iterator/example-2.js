let  array = [1,2,3]



// let array_it = array[Symbol.iterator]()

array[Symbol.iterator] = function () {
    let nextValue = 10;
    return {
        next : function () {
            nextValue++;
            return {
                done: nextValue>15 ? true: false,
                value: nextValue
            }
        }
        
    }
}


// console.log(array_it.next())
// console.log(array_it.next())
// console.log(array_it.next())
// console.log(array_it.next())

for(let element of array) {
    console.log(element)
}