//click
const buttontwo = document.querySelector(".btn-2");

function alertbtn() {
  alert("I also love Javascript");
}
buttontwo.addEventListener("click", alertbtn);

//mouseover
const newbackgroundColor = document.querySelector(".btn-3");

function changecolor() {
  newbackgroundColor.style.backgroundColor = "blue";
}

newbackgroundColor.addEventListener("mouseover", changecolor);
