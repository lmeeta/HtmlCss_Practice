var arrayofweek = ["monday", "tuesday", "wed", "thru", "fri"];
console.log(arrayofweek);

var arrayofAllComponent = [1, 12, 13, "one", "twelve", "thriteen", true, false];
console.log(arrayofAllComponent);
console.log(arrayofAllComponent.length);

var arrayWithObject = [
  ["mon", 1, "tue", 2],
  {
    mon: 1,
    tue: 2,
  },
  456,
  789,
  "hello",
];
console.log(arrayWithObject);
console.log(arrayWithObject.length);

// Add the element in obj
var arrayOfWeek = ["monday", "tuesday", "wed"];
console.log(arrayOfWeek);

arrayOfWeek[2] = "sun";
console.log(arrayOfWeek);

// add the new item at last

arrayOfWeek[arrayOfWeek.length] = "wed";
console.log(arrayOfWeek);

// inter change the value through the array
arrayOfWeek[3] = arrayOfWeek[2];
console.log(arrayOfWeek);

// push and pop
arrayOfWeek.push("thru");
console.log(arrayOfWeek);
arrayOfWeek.pop();
console.log(arrayOfWeek);
arrayOfWeek.pop();
console.log(arrayOfWeek);

// delete the array value
delete arrayOfWeek[1];
console.log(arrayOfWeek);

arrayOfWeek.splice(1, 1);
console.log(arrayOfWeek);

// adding and then delete
arrayOfWeek[arrayOfWeek.length] = "sat";
arrayOfWeek[arrayOfWeek.length] = "fri";
console.log(arrayOfWeek);

arrayOfWeek.splice(0, 1);
console.log(arrayOfWeek);
