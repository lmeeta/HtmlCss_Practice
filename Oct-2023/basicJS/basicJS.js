//Using Spread Operator
console.log("Welcome to Programiz!");
const user = ["one", "two", "three"];
console.log(user);

const newuser = [...user, "four"];
console.log(newuser);

//Destructuring
//for array
const arr = ["Meeta", "Somiya"];
const firstname = arr[0];
console.log(firstname);
const lastname = arr[1];
console.log(lastname);

//shortcut way
const [firstname1, lastname1] = ["Meeta", "Somiya"];
console.log(firstname1);
console.log(lastname1);

//For object
const obj = {
  name: "vishal",
  age: 25,
};
console.log(obj.name);
console.log(obj.age);

//shortcut way
const { name, age } = {
  name: "vishal",
  age: 25,
};
console.log(name);
console.log(age);

//map function
const number = ["1", "2", "3"];
console.log(number);

function transform(numberofArray) {
  const result = numberofArray.map((letter) => ({ val: letter }));
  return result;
}
console.log(transform(number));

//Revisiting control structure

const hobbies = ["Sports", "Art", "Works", "Dancing"];
console.log(hobbies);

//new for loop pattern

for (const hobby of hobbies) {
  console.log(hobby);
}

//Using Function as a value

function handletimeout() {
  console.log("Time Out!!");
}
handletimeout();

const handletimeout2 = () => {
  console.log("Time Out!!  .....again");
};
handletimeout2();

//time setting
setTimeout(handletimeout, 1000);
setTimeout(handletimeout2, 2000);

//direct funtion on time setting

setTimeout(() => {
  console.log("more time please...");
}, 3000);

function greater(small) {
  small();
}

greater(() => console.log("Hello Function"));

//Defining function inside function
function high() {
  function low() {
    console.log("Welcome to low..");
  }
  low();
}
console.log(high());

// let(over ridding in element)
let abc = ["1", "2"];
console.log(abc);
abc = {
  name: "abc",
};
console.log(abc);

//find()
const array1 = ["8", "3", "7", "12", "140"];
const found = array1.find((element) => element > 10);
console.log(found);
const found1 = array1.find((element) => element <= 10);
console.log(found1);
//is not working
const found2 = array1.find((element) => element === 10);
console.log(found2);

//findIndex()
const isLargeNumber = (ele) => ele > 9;

console.log(array1.findIndex(isLargeNumber));
