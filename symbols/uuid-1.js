const uuid = require('uuid')
const library2property = uuid(); // namespaced approach
function lib2tag(obj) {
  Object.defineProperty(obj, library2property, {
    enumerable: false,
    value: 369
  });
}
const user = {
  name: 'Thomas Hunter II',
  age: 32
};
lib2tag(user);
// '{"name":"Thomas Hunter II",
//    "age":32,"f468c902-26ed-4b2e-81d6-5775ae7eec5d":369}'
console.log(JSON.stringify(user));
console.log(user[library2property]); // 369