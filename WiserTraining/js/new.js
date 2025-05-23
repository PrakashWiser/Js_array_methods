function numbers(params) {
  if (document.getElementById("box").value == 0) {
    document.getElementById("box").value = "";
    document.getElementById("box").value += params;
  } else {
    document.getElementById("box").value += params;
  }
}
function cleardata(params) {
  console.log("empty data");
  document.getElementById("box").value = "0";
}
function darkButton() {
  var themText = document.getElementById("darkButton").innerHTML;
  console.log(themText);
  if (themText == "dark mode") {
    document.getElementById("darkButton").innerHTML = "color mode";
    document.getElementById("themeSelector").classList.add("darkModes");
  }
  if (themText == "color mode") {
    document.getElementById("darkButton").innerHTML = "white mode";
    document.getElementById("themeSelector").classList.remove("darkModes");
    document.getElementById("themeSelector").classList.add("colorMode");
  }
  if (themText == "white mode") {
    document.getElementById("darkButton").innerHTML = "dark mode";
    document.getElementById("themeSelector").classList.remove("colorMode");
  }
}
function singledata(params) {
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
  console.log("this is box value: ", boxValue);
  var a = eval(boxValue);
  document.getElementById("box").value;
}
// var days;
// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
// }
// document.getElementById("demo").innerHTML = "Today is" + days;
