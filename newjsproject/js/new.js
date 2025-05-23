function submitted() {
  var a = document.getElementById("inputText").value;
  console.log(a);
  document.getElementById("outputText").innerHTML = a;
  document.getElementById("output").classList.remove("d-none");
}
function closing(params) {
  if (params == "notify") {
    document.getElementById("notification").classList.add("d-none");
  } else {
    console.log("closing works");
    document.getElementById("output").classList.add("d-none");
    document.getElementById("notification").classList.remove("d-none");
  }
}
