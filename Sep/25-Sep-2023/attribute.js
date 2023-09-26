const ul = document.querySelector("ul");

const li = document.createElement("li");
ul.append(li);
// console.log((ul.innerText = `rrx`));
console.log((li.innerText = `x`));

const head = document.querySelector("#main-heading");
head.style.color = "red";

//Modiifying attribute and classess with ID
li.setAttribute("id", "main-heading");
// li.removeAttribute("id");

const WithID = document.querySelector("#main-heading");
console.log(WithID.getAttribute(`id`));

//Modiifying attribute and classess with class
li.classList.add(`list-items`);
console.log(li.classList.contains(`list-items`));

li.classList.remove(`list-items`);

console.log(li.classList.contains(`list-items`));

//remove element
li.remove();
li.remove();
