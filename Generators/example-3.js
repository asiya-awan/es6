var x = { a: 1, b: 2, c: 3 }
x[Symbol.iterator] = function* (){
    yield 1;
    yield 'foo';
    yield 'last'
}


for (let i in x){
    console.log(i);
}
//1
//foo
//last