//creating element
const ul = document.querySelector("ul");
console.log(ul);

const li = document.createElement("li");
console.log(li);

//adding element
ul.append(li);

//modifying element
const firstelement = document.querySelector(`.list-items`);
console.log(firstelement);

console.log(firstelement.innerText);
console.log(firstelement.textContent);
console.log(firstelement.innerHTML);

li.innerText = "Hathi mera sathi";
