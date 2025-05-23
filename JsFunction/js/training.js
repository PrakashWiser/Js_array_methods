// Ternary Operator
var b = 3;
var data = "b is good data";
if (b >= 3) {
  console.log("b is greated than 3");
} else {
  console.log("b is less than 3");
}
var one = b == 3 ? data : "b is not 3";
console.log("ONE DATA:", one);
function colorChange() {
  var a = document.getElementById("one").style.color;
  var b = document.getElementById("two").style.color;
  console.log(a);
  console.log(b);
  var pinkColor = "green";
  var blueColor = "skyblue";

  var yellowcolor = "red";
  var darkcolor = "gray";
  var data =
    a == "black"
      ? pinkColor
      : a == "green"
        ? darkcolor
        : a == "gray"
          ? yellowcolor
          : "black";
  document.getElementById("one").style.color = data;
  var data2 =
    b == "black"
      ? pinkColor
      : b == "green"
        ? blueColor
        : b == "skyblue"
          ? darkcolor
          : "black";
  document.getElementById("two").style.color = data2;
}

var data = a == 10 ? "a is 10" : "a is not 10";
console.log("DATA: ", data);

// Spread Operator
var arrayData1 = ["sunday", "Monday", "Tuesday"];
var arrayData2 = ["Wednesday", "Thur", "Fri"];
var arrayData3 = ["Satur"];
var newArray = arrayData1.concat(arrayData2, arrayData3);
console.log(newArray);
var totalSpread = [arrayData1, arrayData2, arrayData3];
var totalSpreaded = [...arrayData1, ...arrayData2, ...arrayData3];
console.log("normal: ", totalSpread);
console.log("Spreaded: ", totalSpreaded);

// Arrow Function
function dharma(a, b, c) {
  return a * b * c;
}
console.log(dharma(4, 6, 6));

var newArrowFunction = (a, b) => {
  var c = 5;
  return a + b + c;
};

console.log(newArrowFunction(2, 3));

var arr = [1, 2, 3];
let arr2 = [...arr];
arr2.push(4);
console.log(arr2);

var a2 = [1, 2, 3];
var aa2 = [...a2, 4, 5];
console.log(aa2);

var a = 5; //global varible
a = 10;
var b = 7;
b = 8;
const d = 12;
let e = 12;
e = 23;
{
  var a = 25;
  var c = 30;
  console.log(a);
  console.log(c);
  console.log(b);
}
console.log(a);
console.log(e);
// var
// let

a = 1;
a = 2;
var b = 5;
{
  var a = 2;
  var c = 10;
  console.log(a); // 2
  console.log(b); // 5
  {
    var a = 3;
    console.log(a); // 3
  }
}
console.log(a); // 1
console.log(c); // Error (c is not defined outside the blocked scope)

// Here above var is same as let
// but const is different, examples below
//const one = 10;
//one = 'rr'  // it can't change
// Error (can't reassign the value for const)

// const array value can able to change
const k = ["akash", "praksh", "aswaf", "dinesh", "kural"];
console.log("array original: ", k);
k[2] = "abcd";
console.log("update array: ", k);
console.log("updated array string: ", k.toString());

// variale declaration
var x = 1;
var y = 2;
var z = 3;
console.log(x, y, z);
//undefined
// console.log(new);
// var new = 1

//object
const datas = {
  name: "prakash",
  age: 2,
  profosional: "developers",
};
console.log(datas.name);
data.age = 15;
console.log(data);
const data2 = {
  name: "prakash",
  age: 2,
  profosional: "developers",
  books: [
    "Hidtory Of English Literature",
    "American Litrature,",
    "Computer science",
  ].toString,
};
console.log(data2);
const data3 = data2.books;
console.log(data3);
//push mean last data
var a = [1, 2, 3, 4, 5];
a.push(6, 7);
console.log(a);
//unshift frist value or data add
var a = [1, 2, 3, 4, 5];
a.unshift(9, 11);
console.log(a);
//pop mean last one data remove
var a = [1, 2, 3, 4, 5];
a.pop();
console.log(a);
//shift mean frist one data remove
var a = [1, 2, 3, 4, 5];
a.shift();
console.log(a);
//assaiment
var a = 1;
var b = 2;
var c = 3;
console.log(c);
function dharma() {
  return a + b;
}
console.log(dharma());
//undefind
console.log(abcd);
var abcd = 10;

function colorChange() {
  var a = document.getElementById("one").style.color;
  var b = document.getElementById("two").style.color;
  console.log(a);
  console.log(b);
  var pinkColor = "red";
  var blueColor = "blue";
  // if (a == 'black') {
  //     document.getElementById('one').style.color = pinkColor
  // } else {
  //     document.getElementById('one').style.color = 'black'
  // }
  // if (b == 'black') {
  //     document.getElementById('two').style.color = blueColor
  // } else {
  //     document.getElementById('two').style.color = 'black'
  // }
  // var data = (a =='black') ?
  //     pinkColor : 'black';
  // document.getElementById('one').style.color = data
  var data =
    a == "black"
      ? pinkColor
      : a == "red"
        ? blueColor
        : a == "green"
          ? "yellow"
          : "black";
  document.getElementById("one").style.color = data;
}
function generatesimoleOtp() {
  const otp = Math.floor(10000 + Math.random() * 9000);
  console.log("otp: ", otp);
  console.log("to fixed: ", (Math.random() * 9000).toFixed(1));
  var a = Math.random() * 9000;
  console.log("random: ", a);
  return otp;
}
console.log(generatesimoleOtp());
//try catch 
//try-find tha error
//catch-show tha error
function abce() {
  let a = 10
  try {
    console.log(a);
  } catch (e) {
    console.log(e);
  }
}
abce()
//
var wiser = {
  name: "kural",
  "full name": "prakash raj",
  students: 8,
  totaldata: function () {
    console.log(`my age is: ${this.students} ${this.name} and my full name is ${this["full name"].split(" ")[0]}`);

  }

}
wiser.totaldata();
var a = ["prakash", "akash", "kural", "ashwaf"]
a.shift()
console.log(a);
var student = {
  name: "prakash",
  age: 18,
}
student.name = "dharma"
student.age = 20
console.log(student);
function abce() {
  let a = 10
  try {
    console.log(a);
  } catch (e) {
    console.log(e);
  }
}
abce()
var wiser = {
  Name: "Praksh",
  "full name": "Prakash Raj",
  Students: 8,
  Age: 20,
  Totaldata: function () {
    console.log(`My name is  ${this.Name} My full name is  ${this["full name"].split(" ")[1]} my age is ${this.Age} `);
  }
}
delete wiser.Age
wiser.Totaldata()

var array = [1, 2, 3, 4]
for (let index = 1; index < 5; index++) {
  console.log(index * 2);
}
array.forEach(element => {
  console.log(element * 2);

});
array.map(a => a * 2)
console.log(array.toString());
//optional chaining
const adventurer = {
  name: "prakash",
  cat: {
    name: 'dharma',
    Age: 23,
  }
}
// var finalData = adventurer?.cat.name?.name
// console.log(finalData);
// document.getElementById("demo").innerHTML = finalData
//function method
let ab = {
  name: 'prakash',
  age: 20,
  getdata: function () {
    console.log(`my age is ${this.age} and i am ${this.gender}`)
  },
  gender: 'male'
}
console.log(ab.name);
// console.log(ab.getdata());
ab.getdata()

// Function object
function person(fname, lname) {
  this.fname = fname;
  this.lname = lname;
}
const person1 = new person('Prakash', 'two')
const person2 = new person('three', 'four')
let n = (`My First Name Is ${person1.fname}`)
console.log(n);

// class constructor
class batch {
  constructor(name, age, level) {
    this.name = name;
    this.age = age;
    this.level = level;
  }
  gotJob(data) {
    this.data = data
  }
  getData() {
    return (`my name ${this.name} ${this.level} and he got job ${this.data}`)
  }
}
//Object creater
const student1 = new batch('dharma', 29, 'senior')
const student2 = new batch('dinesh', 20, 'junior')
student1.gotJob('no')
console.log(student1.getData());
const obj = {
  name: 'azar',
  age: 29,
  updateData: function () {
    console.log(`my nam is ${this.name} and my age is ${this.age} and work is ${this.work}`);
  }
}
let up = Object.create(obj)
up.name = 'aziz'
up.work = 'teacher'
up.updateData()
let objData = {
  name: 'prakash',
  age: 22,
  profession: 'student',
  'full name': 'prakash raj'
}
console.log(objData.name);   //dot notation
console.log(objData['name']);  //bracket notation
console.log(objData['full name']); //bracket notation compulsory because space in key
// console.log(objData.full name);   // Error

const numSlice = ['zero', 'one', 'two', 'three', 'four', 'five'];
const numSplice = ['zero', 'one', 'two', 'three', 'four', 'five'];

console.log(numSplice.splice(4, 1, 'six')); // (a, b) => start from a, b starts from a
console.log(numSlice.slice(3, 4)); // (a, b) => start from a, b starts from starting

console.log(numSplice);

const frutis = ["mango", "apple", " orange", "banana", "kiwi"]
frutis.fill("Azar")
console.log(frutis);

let text = "ABCDEFG"
const myArr = Array.from(text);
console.log(myArr);

let m = ["mango", "apple", " orange", "banana", "kiwi", "staberry"]
console.log("orginal array", m);
console.log(m.copyWithin(4, 0));
let result = Array.isArray(m);
console.log(result);

//math max
//largest of the numbers given this method
console.log(Math.max(1, 2, 3, 4));

//smalllest of the numbers given this method
console.log(Math.min(1, 2, 3, 4));

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
console.log(getRandomInt(1));

const ns = [1, 2, 3, 4, 5]
let j = ns.reduce((b, m) => (b + m))
console.log(j);
let ys = "Prakash"
const myArrs = Array.from(ys);
console.log(myArrs);



// const myset = setInterval(myfunction, 3000)
// function myfunction() {
//   alert("hi everyone")
// }
const myTimeout = setTimeout(myfunctions, 3000)
function myfunctions() {
  alert(new Date)
}
function myStopFunction() {
  clearTimeout(myTimeout);
}
function startTime() {
  const date = new Date();
  document.getElementById("demo").innerHTML = date.toLocaleTimeString();
  setTimeout(function() {startTime()}, 1000);
}
