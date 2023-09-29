const revelbtn = document.querySelector(".btn");
const hiddentext = document.querySelector(".hidden-box");

function revelbox() {
  if (hiddentext.classList.contains("btn")) {
    hiddenSection.classList.remove("btn");
  } else {
    hiddentext.classList.add("btn");
  }
}

revelbtn.addEventListener("click", revelbox);
