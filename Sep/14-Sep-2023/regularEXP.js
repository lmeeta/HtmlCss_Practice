var string1 = "This is the longest string ever.";
var string2 = "This is the shortest string ever.";
var string3 = "Is this the thing ever called Mount Everest?";
var string4 = "This is the Sherman on the Mount.";

console.log(string1);
console.log(string2);
console.log(string3);
console.log(string4);

// Let see "this" is in the sentence

var regex = /this/;

console.log(regex.test(string1));
console.log(regex.test(string2));
console.log(regex.test(string3));
console.log(regex.test(string4));

// Let see "is" is in the sentence
console.log(string1);
var regex1 = /this/i;
console.log(regex1.test(string1));
console.log(regex1.test(string2));
console.log(regex1.test(string3));
console.log(regex1.test(string4));

// Let see "this" is in front of the sentence
console.log(string1);
var regex2 = /^this/i;
console.log(regex2.test(string1));
console.log(regex2.test(string2));
console.log(regex2.test(string3));
console.log(regex2.test(string4));

// Let see "this" is in end of the sentence
console.log(string1);
var regex3 = /this$/i;
console.log(regex3.test(string1));
console.log(regex3.test(string2));
console.log(regex3.test(string3));
console.log(regex3.test(string4));

// Let see "ever."  is in end of the sentence
console.log(string1);
var regex4 = /ever.$/i;
console.log(regex4.test(string1));
console.log(regex4.test(string2));
console.log(regex4.test(string3));
console.log(regex4.test(string4));

// Let see ever is in end of the sentence
console.log(string1);
var regex5 = /ever\.$/i;
console.log(regex5.test(string1));
console.log(regex5.test(string2));
console.log(regex5.test(string3));
console.log(regex5.test(string4));
