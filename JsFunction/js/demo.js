function bgOrang() {
  document.getElementById("backGround").style.backgroundColor = "red";
}
function bgRed() {
  document.getElementById("backGround").style.backgroundColor = "green";
}
function bgGreen() {
  document.getElementById("backGround").style.backgroundColor = "yellow";
}
function bglightGreen() {
  document.getElementById("backGround").style.backgroundColor = "skyblue";
}
function bgPink() {
  document.getElementById("backGround").style.backgroundColor = "black";
}
function bgOrangs(params) {
  if (params == "orange") {
    document.getElementById(params).style.color = params;
    document.getElementById(params).style.backgroundColor = "black";
  } else if (params == "red") {
    document.getElementById(params).style.color = params;
    document.getElementById(params).style.backgroundColor = "black";
  } else if (params == "green") {
    document.getElementById(params).style.color = params;
    document.getElementById(params).style.backgroundColor = "black";
  } else if (params == "blue") {
    document.getElementById(params).style.color = params;
    document.getElementById(params).style.backgroundColor = "black";
  } else if (params == "pink") {
    document.getElementById(params).style.color = params;
    document.getElementById(params).style.backgroundColor = "black";
  }
  console.log(params);
  params == undefined ? (params = "white") : params;
  console.log(params);
  switch (params) {
    case "orange":
      switchData(params);
      document.getElementById(params).style.color = params;
      document.getElementById(params).style.backgroundColor = "black";
      break;
    case "red":
      document.getElementById(params).style.color = params;
      document.getElementById(params).style.backgroundColor = "black";
    case "green":
      document.getElementById(params).style.color = params;
      document.getElementById(params).style.backgroundColor = "black";
    case "blue":
      document.getElementById(params).style.color = params;
      document.getElementById(params).style.backgroundColor = "black";
    default:
      document.getElementById(params).style.color = params;
      document.getElementById(params).style.backgroundColor = "black";
      break;
  }
}

function switchData(params) {
  document.getElementById(params).style.color = params;
  document.getElementById(params).style.backgroundColor = "black";
}
// Ternary Operator
var b = 3;
var data = "b is good data";
if (b>=3) {
    console.log('b is greated than 3');
} else {
    console.log('b is less than 3');
}
var one = (b == 3) ? data : "b is not 3";
console.log("ONE DATA:", one);

// var data = (a == 10) ? "a is 10" : "a is not 10";
// console.log("DATA: ", data);

// Spread Operator
var arrayData1 = ["sunday", "Monday", "Tuesday"];
var arrayData2 = ["Wednesday", "Thur", "Fri"];
var arrayData3 = ["Satur"];
var newArray = arrayData1.concat(arrayData2, arrayData3)
console.log(newArray);
var totalSpread = [arrayData1, arrayData2, arrayData3];
var totalSpreaded = [...arrayData1, ...arrayData2, ...arrayData3];
console.log("normal: ", totalSpread);
console.log("Spreaded: ", totalSpreaded);

// Arrow Function

function dharma(a, b) {
    return a*b
}
console.log(dharma(4,6));

var newArrowFunction = (a, b) => {
    var c = 5
    return a+b+c
}

console.log(newArrowFunction(2, 3));


var arr = [1, 2, 3]
let arr2 = [...arr]
arr2.push(4)
console.log(arr2);

var a2 = [1, 2, 3]
var aa2 = [...a2, 4, 5]
console.log(aa2);
a = 10;

// if (a==10) {
//     console.log("a is 10");
// } else {
//     console.log('a is not 10');
// }

// Ternary Operator
var b = 3;
var data = "no data";
var one = b == 3 ? data : "no";
console.log("ONE DATA:", one);

var data = a == 10 ? "a is 10" : "a is not 10";
console.log("DATA: ", data);

// Spread Operator
var arrayData1 = ["sunday", "Monday", "Tuesday"];
var arrayData2 = ["Wednesday", "Thur", "Fri"];
var arrayData3 = ["Satur"];
var totalSpread = [arrayData1, arrayData2, arrayData3];
var totalSpreaded = [...arrayData1, ...arrayData2, ...arrayData3];
console.log("normal: ", totalSpread);
console.log("Spreaded: ", totalSpreaded);
function abcd(a, b) {
  return a + b;
}
console.log(abcd(1, 2));
// arrow function
const gef = (x, y, z) => {
  var data = 5;
  return x + y + z + data;
};
console.log(gef(10, 20, 30));
// map function
var mapData = [1, 2, 3];
var result = mapData.map((a) => a * 2);
console.log("mapdata multification 1 2 3",result);
// filter
const datas = [1000, 2000, 3000, 4000, 5000];
const resultt = datas.filter((a) => a > 50).sort();
console.log("filterdatas", resultt);
// Pass a function to map
const array1 = [1, 4, 9, 16];
const map1 = array1.map((x) => x / 2);
console.log(map1);

var a = [2, 4, 6, 8];
var b = a.map((a) => a * 3);
console.log(b);

var a = [10, 20, 30, 40, 50, 45, 100];
var b = a.filter((a) => a > 20).sort();
console.log(b);
var a = 5 //global varible
a = 10
var b = 7
b =8
const d = 12
let e = 12 
e =23
{
    var a = 25
    var c = 30
    console.log(a);
    console.log(c);
    console.log(b);

}
console.log(a);
console.log(e
    
);
