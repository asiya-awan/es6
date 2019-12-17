const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}



let {name, location: {coordinates: [x,y]} = {coordinates: [0,0]}} = person;

console.log(`x: ${x}, y: ${y}`)