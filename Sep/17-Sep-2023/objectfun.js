function speakSomething(what) {
  what = what || "Speaking!";

  for (var i = 0; i < 10; i += 1) {
    console.log(what);
  }
}
console.log(`Speaks   ${window.setTimeout(speakSomething, 1000)}`);

// in another way
var speakSomething = function (what) {
  what = what || "Speaking!";

  for (var i = 0; i < 15; i += 1) {
    console.log(what);
  }
};
console.log(`Speaks   ${window.setTimeout(speakSomething, 2000)}`);

//obj
var obj = {
  sayHello: function () {
    console.log("Hello");
  },
};

console.log(obj.sayHello());

//variable scope in function
var myNum = 32;
var myResult = "Success!";

function randomizer(limit) {
  var randomNumber = Math.floor(Math.random() * limit);

  var myNum = randomNumber;

  console.log("myNum is", myNum);
  console.log("Global myNum is", window.myNum);

  console.log("Our result is", myResult);

  return myNum;
}

console.log(`Random myNum number is  ${randomizer(16)}`);
function doubleIt(num) {
  var myNum = num * 2;

  return myNum;
}
console.log(`Random myNum number double is ${myNum} ${doubleIt(16)}`);

//callback function

// function doubleIt(number) {
//   return (number *= 2);
// }

//one line code
doubleIt = (number) => (number *= 2);
var myNumbers = [1, 2, 3, 4, 5];
var myDoubles = myNumbers.map(doubleIt);
myNumbers.forEach(function (number) {
  console.log("My array contains", number);
});
