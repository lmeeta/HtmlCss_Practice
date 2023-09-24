//For movie
//getElementById()
const tittle = document.getElementById("main-heading");
console.log(tittle);

//getElementByClassName()
const listItems = document.getElementsByClassName(`list-items`);
console.log(listItems);

//getElementByTagName()
//with specific li container
const tagName = document.getElementsByTagName(`li#list-items`);
console.log(tagName);

//queryselector
const container = document.querySelector(`div.container`);
console.log(container);

//queryselectorAll
const container1 = document.querySelectorAll(`div`);
console.log(container1);

//For Sports
//getElementByd()
const tittleSports = document.getElementById(`main-heading-sports`);
console.log(tittleSports);

//getElementByClassName()
const listItemsSports = document.getElementsByClassName(`list-items-sports`);
console.log(listItemsSports);

//getElementByTagName()
const tagNameSports = document.getElementsByTagName(`li#list-items-sports`);
console.log(tagNameSports);

//queryselector
const containerSports = document.querySelector(`div.container1`);
console.log(containerSports);
