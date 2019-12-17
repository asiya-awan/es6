//to make function generator use * before functionName

//select() // by running generator we get back iterator that we need to run

function *select() {
    yield 'House'
    yield 'Garage'
}

// select();  //return generator

let it = select();
console.log(it.next())
console.log(it.next())
console.log(it.next())