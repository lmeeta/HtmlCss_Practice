document.querySelector("#sports").addEventListener("click", function (e) {
  console.log(e.target.getAttribute("id") + "is clicked!");

  const target = e.target;

  if (target.matches("li")) {
    target.style.backgroundColor = "red";
  }
});

//create new element

const sports = document.querySelector("#sports");
const newsprts = document.createElement("li");

newsprts.innerText = "TT";
newsprts.setAttribute("id", "TT");

sports.appendChild(newsprts);
