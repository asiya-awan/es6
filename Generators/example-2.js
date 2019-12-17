function *gen(end) {
    for(let i=0; i<end; i++){
        try {

            yield i;
        }
        catch(e) {
            console.log(e)
        }
    }
}

let it = gen(5);

console.log(it.next())
console.log(it.throw('An error occured'))
console.log(it.next())
console.log(it.next())
console.log(it.next())