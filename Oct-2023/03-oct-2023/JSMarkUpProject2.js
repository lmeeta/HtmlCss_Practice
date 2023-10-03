let openbtn = document.getElementById("open-btn");
let modalContainer = document.getElementById("model-container");
let closebtn = document.getElementById("close-btn");

openbtn.addEventListener("click", function () {
  modalContainer.style.display = "block";
});

closebtn.addEventListener("click", function () {
  modalContainer.style.display = "none";
});

window.addEventListener("click", function () {
  if (e.target === modalContainer) {
    modalContainer.style.display = "none";
  }
});
