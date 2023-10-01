// For up to down
console.log("For up to down");
window.addEventListener(
  "click",
  function () {
    console.log("Window");
  },
  true
);

document.addEventListener(
  "click",
  function () {
    console.log("Document");
  },
  true
);

document.querySelector(".seconddiv").addEventListener(
  "click",
  function () {
    console.log("Second Div");
  },
  true
);

document.querySelector(".firstdiv").addEventListener(
  "click",
  function () {
    console.log("First Div");
  },
  true
);

document.querySelector("button").addEventListener(
  "click",
  function (e) {
    console.log(e);
  },
  true
);

// traget to button
// document.querySelector("button").addEventListener(
//   "click",
//   function (e) {
//     console.log((e.target.innerTesxt = "clicked!"));
//   },
//   true
// );

// For down to up
//  if we put button in anchor tag
console.log("For down to up");
window.addEventListener(
  "click",
  function () {
    console.log("Window");
  },
  false
);

document.addEventListener(
  "click",
  function () {
    console.log("Document");
  },
  false
);

document.querySelector(".seconddiv").addEventListener(
  "click",
  function () {
    console.log("Second Div");
  },
  false
);

document.querySelector(".firstdiv").addEventListener(
  "click",
  function () {
    console.log("First Div");
  },
  false
);
// if we put button in anchor tag change to event
document.querySelector("button").addEventListener(
  "click",
  function (e) {
    e.preventDefault();
    console.log(e);
  },
  false
);

//Lets Stops the chain at second div
console.log("Lets Stops the chain at second div");

window.addEventListener(
  "click",
  function () {
    console.log("Window");
  },
  true
);

document.addEventListener(
  "click",
  function () {
    console.log("Document");
  },
  true
);

document.querySelector(".seconddiv").addEventListener(
  "click",
  function (e) {
    e.stopPropagation();
    console.log("Second Div");
  },
  true
);

document.querySelector(".firstdiv").addEventListener(
  "click",
  function () {
    console.log("First Div");
  },
  true
);

document.querySelector("button").addEventListener(
  "click",
  function (e) {
    console.log(e);
  },
  true
);
//Want second div at one time
console.log("Want second div at one time");

window.addEventListener(
  "click",
  function () {
    console.log("Window");
  },
  true
);

document.addEventListener(
  "click",
  function () {
    console.log("Document");
  },
  true
);

document.querySelector(".seconddiv").addEventListener(
  "click",
  function () {
    console.log("Second Div");
  },
  { once: true }
);

document.querySelector(".firstdiv").addEventListener(
  "click",
  function () {
    console.log("First Div");
  },
  true
);

document.querySelector("button").addEventListener(
  "click",
  function (e) {
    console.log(e);
  },
  true
);
