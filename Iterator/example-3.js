//creting custom Iterable objects
let obj = {
    name :"Asia",
    city: 'winni',
    hobbies: ['cricket','cooking'],
    [Symbol.iterator] : function() {
        let i=0;
        let hobbies = this.hobbies
        return {
            next: function() {
                let value = hobbies[i]
                i++;
                return {
                    done:  i> hobbies.length ?true :false,
                    value: value
                }
            }
        }
    }
}

for(let o of obj) {
    console.log(o)
}
