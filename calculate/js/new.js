function numbers(params) {
  if (document.getElementById("box").value == 0) {
    document.getElementById("box").value = "";
    document.getElementById("box").value += params;
  } else {
    document.getElementById("box").value += params;
  }
}
function cleardata() {
  console.log("empty data");
  document.getElementById("box").value = "0";
}
function darkButton() {
  var themText = document.getElementById("darkButton").innerHTML;
  if (themText == "dark mode") {
    document.getElementById("darkButton").innerHTML = "white mode";
    document.getElementById("themeSelector").classList.remove("darkMode");
  } else {
    document.getElementById("darkButton").innerHTML = "dark mode";
    document.getElementById("themeSelector").classList.add("darkMode");
  }
}
function singledata() {
  var c = document.getElementById("box").value;
  var b = c.slice(0, -1);
  document.getElementById("box").value = b;
}
function equaltos() {
  var boxValue = document.getElementById("box").value;
  var result = eval(boxValue);
  document.getElementById("box").value = result;
}
function pluss() {
  var boxValue = document.getElementById("box").value;
  var a = eval(boxValue);
  document.getElementById("box").value;
}
