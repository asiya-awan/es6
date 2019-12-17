//creting custom Iterable objects
let obj = {
    name :"Asia",
    city: 'winni',
    hobbies: ['cricket','cooking'],
    [Symbol.iterator] : function() {
        let i=0;
       
        return {
            next: function() {
               let entries = Object.entries(obj)           
              
                    let value = entries[i];
                    i++;
                    return {
                        done:  i > entries.length ?true :false,
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
