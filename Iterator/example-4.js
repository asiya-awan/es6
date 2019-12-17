//creting custom Iterable objects
let obj = {
    name :"Asia",
    city: 'winni',
    hobbies: ['cricket','cooking'],
    [Symbol.iterator] : function() {
        let i=0;
       
        return {
            next: function() {
               let values = Object.values(obj)           
              
                    let value = values[i];
                    i++;
                    return {
                        done:  i > values.length ?true :false,
                        value: value
                    }
                    
                }
            }
        }
    }


// let entries = Object.entries(obj)
//  let values = Object.values(obj)

// console.log(values)

for(let o of obj) {
    console.log(o)
}
