//js array method-W3school
//1.pop method 
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
console.log("W3school pop method", fruits);
const j = [1, 2, 3, 4, 5,]
j.pop()
console.log(j);
const k = [1, 2, 3, 4, 5,]
let h = k.reverse()
console.log("freecodecom", k);
h.pop()
console.log("self", h);

//2.push method
const Programs = ["html", "css", "Bootstrap", "Javascript"];
Programs.push("ReactJs");
console.log("W3school push method", Programs);
let y = Programs.reverse()
y.push("python,java,php,sql")
console.log("self", y);

//shift method
const students = ["Asaraf", "Akash", "Dharma", "Aswaf", "dinesh", "kural", "Nithish", "Prakash"];
students.shift();
console.log("W3school shift", students);

//unshift
const Actors = ["Surya", "vijay", "Ajith", "Sivakarthikeyan"];
fruits.unshift("Dhanush");
console.log("W3school unshift", Actors);

//concat
const W3school = ["w3school concat"]
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = W3school.concat(myBoys, myGirls);
console.log(myChildren);

//splice
const array = ["Banana", "Orange", "Apple", "Mango"];
array.splice(2, 0, "Lemon", "Kiwi");
console.log("W3school splice method", array);

//slice
const Newarray = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = Newarray.slice(1);
console.log("w3school slice method", citrus);

const numbers = [1, 3, 4, 7, 2]
let numbermethod = numbers.sort((a, b) => (a - b))
console.log(numbers);

//js array method-geeksforgeeks
//pop
function pop() {
    let numArr = [20, 30, 40, 50];
    numArr.pop();
    console.log("geeksforgeeks pop method", numArr);
    let strArr = ["amit", "sumit", "anil"];
    strArr.pop();
    console.log("geeksforgeeks pop method", strArr);
}
pop()

//shift
function shift() {
    let numArrs = [20, 30, 40, 50];
    numArrs.shift();
    console.log("geeksforgeeks shift", numArrs);
}
shift()

//unshift
function unshift() {
    let number = [20, 30, 40];
    number.unshift(10, 20);
    console.log("geeksforgeeks unshift", number);
}
unshift()


//splice
function splice() {
    let numArrss = [20, 30, 40, 50, 60];
    let a = numArrss.splice(0, 1);
    console.log("geeksforgeeks splice", a);
}
splice()

//slice
function slice() {
    let arr = [23, 56, 87, 32, 75, 13];
    let new_arr = arr.slice(2, 5);
    console.log(arr);
    console.log("geeksforgeeks slice", new_arr);
}
slice()

//freecodecom-arraymethod
//pop
const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log("freecodecom", threeArr);

//push
let arr = [0, 1, 2, 3];
arr.push(4, 5, 6, 7, 8, 9);
console.log(arr);

//map
const num = [1, 2, 3, 4];
const doubled = num.map(item => item * 2);
console.log("freecodecom map", doubled);

//shift
const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();
console.log("freecodecom", removedFromOurArray);

//splice
const cities = ["Tokyo", "Cairo", "Los Angeles", "Paris", "Seattle"];
const newCityArr = cities.slice(2);
const newCity = cities.slice(1, 3)
console.log(newCity);
console.log(newCityArr);

//slice
const citiess = ["Tokyo", "Cairo", "Los Angeles", "Paris", "Seattle"];
const newCityArrs = citiess.slice(-2, 4)
console.log(newCityArr);
console.log("Original: ", cities)
console.log("New: ", newCityArr)

//filter

const numbersevents = [1, 2, 3, 4];
const evens = numbersevents.filter(item => item > 2);
console.log("freecode filter", evens);

//reduce
const numberss = [1, 2, 3, 4];
const sum = numberss.reduce(function (result, item) {
    return result + item;
}, 0);
console.log("freecodecom reduce ", sum);
