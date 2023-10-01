document.querySelector("#football").addEventListener("click", function (e) {
  console.log("Football is clicked!");

  const target = e.target;

  if (target.matches("li")) {
    target.style.backgroundColor = "green";
  }
});

document.querySelector("#cricket").addEventListener("click", function (e) {
  console.log("Cricket is clicked!");

  const target = e.target;

  if (target.matches("li")) {
    target.style.backgroundColor = "green";
  }
});

document.querySelector("#tabletennies").addEventListener("click", function (e) {
  console.log("Tabletennies is clicked!");

  const target = e.target;

  if (target.matches("li")) {
    target.style.backgroundColor = "green";
  }
});

document.querySelector("#badminton").addEventListener("click", function (e) {
  console.log("Badminton is clicked!");

  const target = e.target;

  if (target.matches("li")) {
    target.style.backgroundColor = "green";
  }
});

document.querySelector("#chess").addEventListener("click", function (e) {
  console.log("Chess is clicked!");

  const target = e.target;

  if (target.matches("li")) {
    target.style.backgroundColor = "green";
  }
});
