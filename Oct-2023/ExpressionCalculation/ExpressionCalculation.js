var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var num3 = document.getElementById("num3");
var clickresult = document.getElementById("clickresult");
var a, b, c;

function combine(a, b, c) {
  var result = (a * b) / c;
  return result;
}

clickresult.addEventListener("click", function () {
  a = num1.value;
  b = num2.value;
  c = num3.value;

  if (a === "" || b === "" || c === "") {
    alert("all fields are required");
  } else {
    var result = document.getElementById("result");

    var output = `( ${a} *  ${b} ) / ${c}  =  ${combine(a, b, c)} `;
    result.innerHTML = output;
  }
});
