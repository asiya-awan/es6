let obj = {
    name :"Asia",
    city: 'winni',
    hobbies: ['cricket','cooking'],
    
}



// for(let [ key, value ] of Object.entries(obj)) {
//     console.log(`key: ${key}, value: ${value}`)
// }


Object.keys(obj).forEach((key)=>{
    console.log(`${key}: ${obj[key]}`);
});




