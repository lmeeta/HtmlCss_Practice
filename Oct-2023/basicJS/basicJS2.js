//Concatinate 'Tom' and 'Jerry'

var1 = "Tom";
var2 = "Jerry";
//Different ways:
console.log(var1, "and", var2);

console.log(var1 + " and " + var2);

console.log(`${var1} and ${var2}`);

//Assign 2 string in combination to third string and find length.
var1 = "This ";
var2 = "is ";

var3 = var1 + var2 + "Javascript";
console.log(var3);
console.log(`Length is ${var3.length}`);

//Print date
var yr = 2023;
var mon = 12;
var date = 17;
console.log(`${date}- ${mon}- ${yr}`);

//convert degree celsius to degree fahrenheit
var c = 24;
var f = 9 * (c / 5) + 32;
console.log(` ${c} degree celsius to ${f} fahrenheit. `);
