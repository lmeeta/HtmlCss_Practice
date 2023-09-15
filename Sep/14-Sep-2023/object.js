var emptyobj = {};
console.log(emptyobj);
var fillobj = {
  apple: "red",
};
console.log(fillobj);
var bird = {
  genus: "corvus",
  species: "corvax",
  commonName: "raven",
  callType: "squawky",
  quote: "Nevermore",
  maxOffspring: 5,
  noisy: true,
  deadly: false,
};
console.log(bird);
var bear = {
  genus: "ursus",
  species: "arctos",
  commonName: "brown bear",
  callType: "roar",
  quote: "",
  maxOffspring: 3,
  noisy: true,
  deadly: true,
};
console.log(bear);
var bookOfKnowledge = {
  "lunch time": "12:30 PM",
  "the ultimate answer": 42,
  bestSong: "Lonnie's Lament",
  earth: "Mostly harmless.",
};
console.log(bookOfKnowledge);

// Check the property for the object
console.log(bookOfKnowledge.earth);
console.log(bear.maxOffspring);
console.log(bird["noisy"]);

// Add the new property to object
bird.color = "black";
console.log(bird);

bookOfKnowledge.lunchTime = "13";
console.log(bookOfKnowledge);

// Update the object property
bookOfKnowledge["lunch time"] = "12";
console.log(bookOfKnowledge);

bear.maxOffspring = 5;
console.log(bear);

// Similar property to other object

var animal = {
  yearold: "12",
  size: "Five",
};
console.log(animal);

console.log(animal.size);

var panda = animal;
console.log(panda);

animal.size = "six";
console.log(animal);

console.log(panda);
panda.size = "nine";
console.log(panda);

console.log(animal);

// but if  change the property of that object again usng var then it wll not same
var panda = {
  yearold: "5",
};
console.log(panda);

console.log(animal);
console.log(panda);
