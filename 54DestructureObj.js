/* Destructing for object */

const student = {
  name: "abc",
  age: 14,
  class: 9,
  sub: ["kan", "eng", "science", "social", "maths"],
  username: "abc@gmail.com",
  password: "xyz",
};

/*let username = student.username;
let password = student.password;
to store individual property of student we created new variable if incase if there is so many properties to be storeed then we use destructure in array destructure we use [], in object destructure we use {}*/

// let { username, password } = student;
// console.log(username);
// console.log(password);

/* This name should be same with keyword so that it matches the keyword and store it or else if name differ it prints undefined if we want to store the username value in some other then syntax */

let { username:user, password:pswd } = student;
console.log(user);
console.log(pswd);
