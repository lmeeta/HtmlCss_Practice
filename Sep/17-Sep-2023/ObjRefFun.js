var calvin = {
  name: "Calvin",
  bestFriend: "Hobbes",
  form: "human boy",
};

console.log(calvin);
console.log(transmogrifier(calvin));
console.log(calvin);
// you can also pass an object to a function
// because objects are passed by reference, the argument will be modified
var randomNumber = Math.floor(Math.random() * 5) + 1;
function transmogrifier(calvin) {
  if (typeof calvin !== "object") {
    console.error("argument is of the wrong type");
    return;
  }

  // generate a random number between 1 and 5
  var randomNumber = Math.floor(Math.random() * 5) + 1;

  switch (randomNumber) {
    case 1:
      calvin.form = "tyrannosaurus";
      break;
    case 2:
      calvin.form = "grey wolf";
      break;
    case 3:
      calvin.form = "bengal tiger";
      break;
    case 4:
      calvin.form = "grizzly bear";
      break;
    case 5:
      calvin.form = "canary";
      break;
    default:
      // he stays human
      calvin.form = "human boy";
      break;
  }
}
console.log(calvin);

//reference
// this version of the transmogifier does return a copy, leaving the original alone
var calvin1 = {
  name: "Calvin",
  bestFriend: "Hobbes",
  form: "human boy",
};
function transmogrifyCopy(calvin1) {
  if (typeof calvin1 !== "object") {
    console.log("argument is of the wrong type");
    return;
  }

  // generate a random number between 1 and 5
  var randomNumber = Math.floor(Math.random() * 5) + 1;
  var newForm = calvin1.form; // by default, do not change

  switch (randomNumber) {
    case 1:
      newForm = "tyrannosaurus";
      break;
    case 2:
      newForm = "grey wolf";
      break;
    case 3:
      newForm = "bengal tiger";
      break;
    case 4:
      newForm = "grizzly bear";
      break;
    case 5:
      newForm = "canary";
      break;
    default:
      // he stays human
      newForm = "human boy";
      break;
  }

  // return a new object that's just like calvin,
  // but transmogrified!
  return {
    name: calvin1.name,
    bestFriend: calvin1.bestFriend,
    form: newForm,
  };
}
console.log(transmogrifyCopy(calvin1));

console.log(calvin1);
