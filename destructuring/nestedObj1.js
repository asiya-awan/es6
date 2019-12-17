const myObject = { 
    props: { 
      match: { 
        params: { 
          username: 'Paige' 
        } 
      } 
    }
  };

  const { 
    props: { match: { params: {  username } = {username: 'No username'}} }
   } = myObject; 


  console.log(username); // prints: 'Paige'


  
  const { 
    props: {
      match: {
        params: { 
          username 
        }, 
      }, 
    }, 
  } = myObject; 


  const myObject = { 
    props: 'I only have props, nothing else'
  };

//   ES6 Destructured Object with Default Props
const { 
  props: { match } = { match: 'No match'}
} = myObject

console.log(match); // prints: 'No match'