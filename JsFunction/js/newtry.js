// let a = ["prakash", "akash", "asar", "kural", "dinesh"];
// var c = a.filter((a) => a.length > 4);
// console.log(a);
// console.log(c);
// var mapData = c.map((c) => "My Name is " + c);
// console.log(mapData);
// let b = ["prakash", "akash", "kural", "dinesh"];
// console.log(b.length);
// console.log(b.toString());
// console.log(b.at(1));
//js array method
//toString()
//at() or bracket notation
//join
//pop()
//push()
//unshift()
//shift()
//update arr data using bracket notation .[2] = 'data'
//add new data in last using length [.length] = 'data'
//concat
//flat()
//slice()
//splice()  //
//toPliced()  //doesn't alter the existing array

// const arr = [1, 2, 3, 4, 6];
// let d =  arr.toSpliced(1, 2);
// console.log(arr);
// console.log(d);
 //length
// let a =['prakash','akash','dharma','kural']
// console.log(a);
// console.log('lengthData', a.length);
// tostring
// var b =['prakash','akash','dharma','kural'] 
// console.log(b);
// a = b.toString()
// console.log('stringData',a);
// //at
// var b =['prakash','akash','dharma','kural'] 
// console.log(b);
// console.log('atData 3', b.at(3));
// //jion
// var b =['prakash','akash','dharma','kural']
// console.log(b);
// console.log('jionData',b.join('+ ') );
// //pop
// var b =['prakash','akash','dharma','kural']
// console.log('popData', b.pop());
// console.log(b);
// //push
// var b =['prakash','akash','dharma','kural']
// console.log('orginelData', b);
// var c = b.push('aswaf')
// console.log('AnswerData', b);
// updata array data using bracket notation
// const Model = ["Iphone", "IQ", "Vivo", "Mac", "Samsung", "Redmi"];
// console.log(Model);
// Model[Model.length] = '7'
// console.log(Model);
// console.log(Model);
// Model[7] ='oppo'
// console.log(Model);
// console.log('shiftData',Model.shift());
// console.log('removeData', Model);

//   var a = {
//     name: "Prakash",
//     age:10,
//     qualification:"BA degree",
//     "full Name" : 'PrakashRaj'
     
//   }
//   a.name = 'Dhanush'
//   console.log(a["full Name"]);

//unshift
// const Games = ["Pubg", "Tamplerun", "FreeFire", "Ludo"];
// console.log(Games);
// Games.unshift("PupleShooter");
// console.log('unshiftData PupleShooter',Games);
// //concat
// const myGirl = ["Tirsha"];
// const myBoy = [ "Vijay"];
// const mySingers = ["Dhanush", "Anirudh", "Vijayantony"];
// const myChildren = myGirl.concat(mySingers,myBoy);
// console.log('concat', myChildren);
// //flat
// const myArr = [[1,2,3,5],[3,4],[5,6]];
// const newArr = myArr.flat();
// console.log('newarrayData',newArr);
// //splice
// const thiss = ["Banana", "Orange", "Apple", "Mango"];
// console.log(thiss.splice(0, 3));
// const numSlice = ['zero', 'one', 'two', 'three', 'four', 'five', 'five']; 
// let ff=[21,23,1,2,3,4,6,6,5]
let dd=['one','threee','two','twoo', 'three', 'apple']
console.log('original array:', dd);
console.log(dd.sort());
console.log('sort: ',dd);
let ee=['one','threee','two','twoo', 'three', 'apple']
let updated= ee.toSorted();
console.log('toSorted: ',ee);
console.log('updated array', updated);

		// const numSplice = ['zero', 'one', 'two', 'three', 'four', 'five'];

		// console.log(numSplice.splice(4, 1, 'six')); // (a, b) => start from a, b starts from a
		// console.log(numSlice.slice(3, 4)); // (a, b) => start from a, b starts from starting
