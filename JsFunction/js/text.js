// function colorChange() {
//   var a = document.getElementById("one").style.color;
//   var b = document.getElementById("two").style.color;
//   console.log(a);
//   console.log(b);
//   var pinkColor = "red";
//   var blueColor = "blue";
//   // if (a == 'black') {
//   //     document.getElementById('one').style.color = pinkColor
//   // } else {
//   //     document.getElementById('one').style.color = 'black'
//   // }
//   // if (b == 'black') {
//   //     document.getElementById('two').style.color = blueColor
//   // } else {
//   //     document.getElementById('two').style.color = 'black'
//   // }
//   // var data = (a =='black') ?
//   //     pinkColor : 'black';
//   // document.getElementById('one').style.color = data
//   var data =
//     a == "black"
//       ? pinkColor
//       : a == "red"
//       ? blueColor
//       : a == "green"
//       ? "yellow"
//       : "black";
//   document.getElementById("one").style.color = data;
// }
// var a = ["prakash", "akash", "kural", "ashwaf"]
// a.shift()
// console.log(a);
// var student ={
//   name: "prakash",
//   age : 18,
// }
// student.name = "dharma"
// student.age = 20
// console.log(student); 
// function abce() {
//   let a =10
//   try {
//     console.log(a);
//   } catch (e) {
//     console.log(e);
//   } 
// }
// abce()
// var wiser ={
//    Name:"Praksh",
//    "full name": "Prakash Raj",
//    Students: 8,
//    Age: 20,
//     Totaldata :function() {
//       console.log(`My name is  ${this.Name} My full name is  ${this["full name"].split(" ")[1]} my age is ${this.Age} `);
//     }
//    }
//    delete wiser.Age
//    wiser.Totaldata()

// var array =[1, 2, 3, 4]
// for (let index = 1; index < 5; index++) {
//     console.log(index*2);  
// }
// array.forEach(element => {console.log(element*2);

// });
// array.map(a => a*2)
// console.log(array.toString());
// //optional chaining
// const adventurer = {
//   name : "prakash",
//   cat :{
//     name : 'dharma',
//      Age :23,
//   }
// }
//optional chaning
// var finalData = adventurer?.cat?.Age
// console.log(finalData);
// document.getElementById("demo").innerHTML = finalData
//array methods 
//length
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
document.getElementById("demo1").innerHTML = size;
//tostring
const fruit = ["Prakash", "Dharma", "Akash", "Kural"];
document.getElementById("demo2").innerHTML = fruit.toString();
//at 
const students = ["Dhilif", "Vicky", "Asar", "Manikandan"];
let members = students.at(2);
document.getElementById("demo3").innerHTML = members
//jion
const fruitss = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo4").innerHTML = fruitss.join("+ ")
//pop
const studentss = ["Dhilif", "Vicky", "Asar", "Manikandan", "Prakash", "Dharma", "Akash", "Kural"];
document.getElementById("demo5").innerHTML = studentss.pop()
//push
const fruitis = ["Banana", "Orange", "Apple", "Mango"];
fruitis.push("jackfruit");
document.getElementById("demo6").innerHTML = fruitis
//shift
const Model = ["Iphone", "IQ", "Vivo", "Mac", "Samsung", "Redmi"];
Model.shift();
document.getElementById("demo7").innerHTML = Model;
//unshift
const Games = ["Pubg", "Tamplerun", "FreeFire", "Ludo"];
Games.unshift("PupleShooter");
document.getElementById("demo8").innerHTML = Games;
//delete
const brands = ["Lg", "Mac", "Lenovo", "Acer", "Hp"];
document.getElementById("demo9").innerHTML =
  "The first One of  the brand: " + brands[2];
delete brands[0];
document.getElementById("demo10").innerHTML =
  "The first fruit is: " + brands[0];
//concat
const myGirls = ["Nayanthara", "Anushka"];
const myGirl = ["Tirsha"];
const myBoy = ["Vijay"];
const mySingers = ["Dhanush", "Anirudh", "Vijayantony"];
const myChildren = myGirls.concat(mySingers, myBoy).concat(myGirl);
document.getElementById("demo11").innerHTML = myChildren;
//copywithin
const wwe = ["Roman", "Undertracker", "Setrollens", "Denampores", "Kene", "Bigshow"];
document.getElementById("demo12").innerHTML = wwe.copyWithin(0, 2);
//flat
const myArr = [[1, 2, 3, 5], [3, 4], [5, 6]];
const newArr = myArr.flat();
document.getElementById("demo13").innerHTML = newArr;
//splice
const thiss = ["Banana", "Orange", "Apple", "Mango"];
thiss.splice(0, 3);
document.getElementById("demo15").innerHTML = thiss;
// Function object
function person(fname, lname) {
  this.fname = fname;
  this.lname = lname;
}
const person1 = new person('Prakash', 'two')
const person2 = new person('three', 'four')
let z = (`My First Name Is ${person1.fname}`)
document.getElementById("demo16").innerHTML = z

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

console.log(numSplice.slice(-1));

const mytimeout = setTimeout(myfunction, 3000)
function myfunction() {
  alert("hi everyone")
}
