var one = 1,
  two = 2;

console.log(`Whether one is equal to one.      Ans : ${one === one} `);

console.log(`Whether one is not equal to one.   Ans :${one !== one}`);

console.log(`Whether two is equal to 2.         Ans : ${two === 2}`);

console.log("Whether two is not equal to 2");
console.log(two !== 2);

console.log(`Whether one is equal to two.       Ans: ${one === two}`);

// For string
console.log("Whether one is equal to '1'");
console.log(one == "1");

console.log("Whether '1' is not equal to one");
console.log("1" != one);

// Less-then , Greater-then terms
console.log(`Whether one is less then 2.        Ans :  ${one < 2}`);

console.log("Whether one is greater then 2");
console.log(one > 2);

console.log("Whether one is less then '2'");
console.log(one < "2");

// less then or equal to
console.log(`Whether one is less then or equal to 0 ${one <= 0}`);

//Arithmatic Operation

console.log(`Addition of 3 and 5 is ${(add = 3 + 5)}`);
console.log(`Substraction of 3 and 5 is ${(sub = 3 - 5)}`);
console.log(`Multiplication of 3 and 5 is ${(mul = 3 * 5)}`);
console.log(`Divition of 30 and 5 is ${(div = 30 / 5)}`);
console.log(`Modulo of mul(15) and div(6) is ${(mod = mul % div)}`);
console.log(`Modulo of 20 and 2 is ${(mod = 20 % 2)}`);

//add and sub of count

var count = 0;
console.log(` add and sub value of count     ${count}`);

console.log(`Add 1 in count with 1 method    ${(count = count + 1)}`);

console.log(`Add 1 in count with 2 method    ${(count += 1)}`);

console.log(`Add 1 in count with 3 method    ${count++}`);
console.log(count);

console.log(`Add 7 in count with 4 method    ${(count += 7)}`);

console.log(`Add 4 in count with 4 method    ${(count -= 4)}`);

console.log(`Sub 1 in count with 3 method    ${count--}`);
console.log(count);

console.log(`Sub 1 in count with 2 method    ${(count -= 1)}`);

console.log(`Sub 1 in count with 1 method    ${(count = count - 1)}`);

//mul ,divide,modulo
console.log(`Multiply 4 with count    ${(count *= 4)}`);
console.log(`Divide count by 2    ${(count /= 2)}`);
console.log(`Modulo count by 2    ${(count %= 2)}`);

//string concatinate
console.log("Cat " + "Dog");
console.log("Cat " + " and " + " Dog");
