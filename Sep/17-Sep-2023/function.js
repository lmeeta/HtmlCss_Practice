console.log("Ariii");
console.log("Meoww");
console.log("euuuuu");
console.log("Tiieee");

//Using function
console.log("Using Function");
function speak() {
  console.log("Ariii");
  console.log("Meoww");
  console.log("euuuuu");
  console.log("Tiieee");
}

console.log(speak());

fuddify("Be very quiet, I'm hunting rabbits.");
fuddify("You screwy rabbit.");
fuddify("Rabbit tracks!");

function fuddify(speech) {
  // if it's not a string, return an error message
  if (typeof speech !== "string") {
    console.error("Nice twy, wabbit!");
    return;
  } // otherwise, make it sound like Elmer Fudd
  console.log(speech);
  console.log((speech = speech.replace(/r/g, "w")));
  console.log((speech = speech.replace(/R/g, "W")));

  return speech;
}

// var uth = fuddify("Hello world!");
// console.log(uth);

function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
function isEven(num) {
  return num % 2 === 0;
}

console.log("35 % 2");
console.log(`isEven(35) ${isEven(35)}`);

console.log("44 % 2");
console.log(`isEven(44) ${isEven(44)}`);

//speakSomething function

function speak(what, howMany) {
  // this pattern works nicely for default values:
  // check if the argument is undefined, and if it is, provide a default value
  var what = typeof what !== "undefined" ? what : "Default speech";
  var howMany = typeof howMany !== "undefined" ? howMany : 10;

  // shorter version that could get tripped up by truthiness
  // what = what || 'Default speech';
  // howMany = howMany || 10;

  for (var i = 0; i < howMany; i += 1) {
    console.log(what + " (" + i + ")");
  }
}
speak("Hey hello");
speak();

// adding number
function addingMachine() {
  // initialize the total we'll be returning
  var total = 0;

  for (var i = 0; i < arguments.length; i += 1) {
    // grab the next number
    var number = arguments[i];

    // check if the argument is a number.
    // if so, add it to the running total
    if (typeof number === "number") {
      total += number;
    }
  }

  // done - return the total
  return total;
}
console.log(`Add 1 2 3      ${addingMachine(1, 2, 3)}`);
console.log(
  `Add 1 2 3 4 5 ...   ${addingMachine(
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    1204910249014
  )}`
);
