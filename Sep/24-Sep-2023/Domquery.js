const tittle = document.querySelector(`#main-heading`);
console.log(tittle);

tittle.style.color = "white";
tittle.style.backgroundColor = "blue";
tittle.style.width = "500px";
// tittle.style.margin = "5px";
// tittle.style.paddingLeft = "15px";
tittle.style.textAlign = "center";

const listItem1 = document.querySelectorAll(".list-items1");
console.log(listItem1);

for (i = 0; i < listItem1.length; i++) {
  listItem1[i].style.fontSize = "3rem";
  listItem1[i].style.color = "green";
  listItem1[i].style.border = "2px solid red";
  listItem1[i].style.listStyle = "none";
  listItem1[i].style.width = "500px";
  listItem1[i].style.margin = "5px";
  listItem1[i].style.backgroundColor = "pink";
}

const listItem = document.querySelector(".list-items");
console.log(listItem);
listItem.style.fontSize = "3rem";

const container1 = document.querySelectorAll(".container");
console.log(container1);

// creating element
