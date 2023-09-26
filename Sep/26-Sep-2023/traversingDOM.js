//Parent traversng

let ul = document.querySelector(`ul`);
console.log(ul);

console.log(ul.parentNode);
console.log(ul.parentNode.parentNode);

console.log(ul.parentElement);
console.log(ul.parentElement.parentElement);

//documentElement
const html = document.documentElement;
console.log(html.parentNode);
console.log(html.parentElement);

//childnodes
console.log(ul.childNodes);

console.log(ul.firstChild);
console.log(ul.lastChild);

console.log(ul.children);
console.log((ul.firstElementChild.style.backgroundColor = "red"));

console.log((ul.lastElementChild.style.backgroundColor = "blue"));
//don't know how to set for all
// console.log((ul.children.style.backgroundColor = "red"));

//Sibling traversal
console.log(ul);

console.log(ul.previousSibling);
console.log(ul.nextSibling);

const div = document.querySelector(`div`);
console.log(div.childNodes);

console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);
