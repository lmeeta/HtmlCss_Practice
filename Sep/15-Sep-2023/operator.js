var rat = "small",
  camel = "big",
  elephant = "motu",
  ant = "patlu";

console.log(`Rat       =   ${rat}`);
console.log(`Camel     =   ${camel}`);
console.log(`Elephant  =   ${elephant}`);
console.log(`Ant       =   ${ant}`);

//If both value right
console.log("If both value Right");
console.log(
  `Is rat:small and camel:big      Ans:  ${rat === "small" && camel === "big"}`
);
console.log(
  `Is rat:small or camel:big       Ans:  ${rat === "small" || camel === "big"}`
);

//If both value wrong
console.log("If both value wrong");
console.log(
  `Is rat:big and camel:samll      Ans:  ${rat === "big" && camel === "small"}`
);
console.log(
  `Is rat:big or camel:samll       Ans:  ${rat === "big" || camel === "small"}`
);

//if one is correct then
console.log("If one value correct then");
console.log(
  `Is rat:big and camel:big        Ans:  ${rat === "big" && camel === "big"}`
);
console.log(
  `Is rat:big or camel:big         Ans:  ${rat === "big" || camel === "big"}`
);

// using AND and OR
console.log(
  `Is rat:big or camel:big and elephant:motu         Ans:  ${
    rat === "big" || (camel === "big" && elephant === "motu")
  }`
);
//and as false but or has true value
console.log(
  `(Is rat:small and camel:small) and elephant:motu or ant:patlu      Ans: ${
    (rat === "big" && camel === "small" && elephant === "motu") ||
    ant === "patlu"
  }`
);

//AND has true but OR has false value
console.log(
  `(Is rat:small and camel:small) and elephant:motu or ant:patlu      Ans: ${
    (rat === "small" && camel === "big" && elephant === "motu") ||
    ant === "motu"
  }`
);

//(AND has true) but (OR has false value)
console.log(
  `(Is rat:small and camel:small) and elephant:motu or ant:patlu      Ans: ${
    rat === "small" &&
    camel === "big" &&
    (elephant === "motu" || ant === "motu")
  }`
);

//Condtions
var answer = window.confirm("Click OK, get true. Click cancel, get false");
console.log(answer);

//if
var answer = window.confirm("Click OK, get true. Click cancel, get false");
if (answer === true) console.log("You said OK");

//if..else
var answer = window.confirm("Click OK, get true. Click cancel, get false");
if (answer === true) {
  console.log("You said OK");
} else {
  console.log("You said Cancel");
}

//if..else.if..
var answer = window.prompt("Type Yes,No, or Maybe. Then click OK.");
if (answer === "Yes") {
  console.log("You said OK");
} else if (answer === "No") {
  console.log("You said Cancel");
} else if (answer === "Maybe") {
  console.log("You said Maybe");
} else {
  console.log("You said hmmmmm");
}

//switch
var animi = window.prompt("Type Yes,No , or okok. Then click OK. ");

switch (animi) {
  case "Yes":
    console.log("Its Yes");
    break;
  case "okok":
    console.log("its okok");
    break;
  case "No":
    console.log("its No");
}

//ternary operator
var ani1 = "cat";
console.log(ani1);
var ani1 = "cat";
ani1 === "cat" ? console.log("All ok cat") : console.log("not cat");

var job =
  ani1 === "dog"
    ? console.log("This is cat job")
    : console.log("This is dog job");

//Typeof
var aThing = [];
typeof aThing === "object" && aThing.hasOwnProperty("length");
console.log(
  `Array   :  ${typeof aThing === "object" && aThing.hasOwnProperty("length")}`
);
console.log(aThing);

var thing1 = 679;
typeof thing1;
console.log(`Type of num    :  ${typeof thing1}`);

var thing2 = "sdgfvdehbf";
console.log(`Type of string    :  ${typeof thing2}`);

var thing3 = {};
console.log(`Type of obj   :  ${typeof thing3}`);

var thing4 = true;
console.log(`Type of bool   :  ${typeof thing4}`);
