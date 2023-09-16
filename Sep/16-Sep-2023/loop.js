for (i = 0; i < 10; i += 1) {
  console.log(i);
}
var pagename = [
  "Home",
  " About us",
  " Loop in JS",
  " Contact us",
  " Help",
  " hiiii",
];
console.log(`Print pagename   :  ${pagename}`);

console.log(document.title);

//Looping over an array
for (i = 0; i < pagename.length; i += 1) {
  if (document.title === pagename[i]) {
    console.log("We are here  " + pagename[i]);
  } else {
    console.log("We are not here  " + pagename[i]);
  }
}
console.log("With break");

for (i = 0; i < pagename.length; i += 1) {
  if (document.title === pagename[i]) {
    console.log("We are here  " + pagename[i]);
    break;
  } else {
    console.log("We are not here  " + pagename[i]);
  }
}

console.log("Without repeat yourself");

for (i = 0; i < pagename.length; i += 1) {
  current = pagename[i];
  if (document.title === current) {
    console.log("We are here  " + current);
    break;
  } else {
    console.log("We are not here  " + current);
  }
}

console.log("Itrate over an array");

for (var p in pagename) {
  console.log(p, pagename[p]);
}

console.log("Itrate over an object");

var page = {
  first: "Home",
  second: " About us",
  third: " Loop in JS",
  fourth: " Contact us",
  fifth: " Help",
  six: " hiiii",
};
for (var p in page) {
  console.log(p, page[p]);
}
//with if loop
console.log("**With if loop");
for (var p in page) {
  if (page.hasOwnProperty(p)) console.log(p, page[p]);
}
//while loop
console.log("While Loop");
var i = 0;
while (i < 10) {
  console.log(i + "..This will go until we go 10");
  i += 1;
}

//if we don't know till when we have to stop
var myitem = [true, false, true, true, true];

console.log(myitem);
var items = null;

while (items !== false) {
  console.log("My Item" + myitem.length + "items now.loop until False");
  items = myitem.pop();
}

console.log("Do loop");
//do loop
var myArray = [true, false, true, true, true];

var myitems = false;
do {
  console.log("My Item" + myArray.length + "items now.loop until False");
  myitems = myArray.pop();
} while (myitems !== false);
