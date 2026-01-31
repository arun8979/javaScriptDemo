//==============11=====================
// function doWork(){
//     console.log("hiii ia am arun")
//     console.log("hi i am learning javascript")
// }

// doWork("hiii");
// doWork();

//================22============
// function doWork(msg){
//     console.log(msg)

// }

// doWork("hii whats up!!!!!!!!")

//================33================
// let mesg = "i am arun from rudraprayag"
// function yoho(){
//     console.log(mesg)
// }
// yoho();

//================44================


// function sum(a,b){
//     console.log(a + b);
// }
// sum(2,4);

//================55================

// function na(a,b){
// s = a * b;
// return s;
// }

// let val = na(4,6);
// console.log(val);

/////ARROW FUNCTION can be store in an variable

// let sum = (a,b,c ) => {
//     return a +b + c;
// }
// console.log(sum(1,2,4));


// let multiply = (a,b,c,d) =>{
//     return(a + b * c );
// }
// console.log(multiply(2,4,6,8));


//practice questionno 1

// function countVowels(str){
//     let count = 0;
// for(let strs of str){
//     if(strs === "a"  || 
//         strs === "e" ||
//         strs === "i" ||
//         strs === "o" ||
//         strs === "u"
//     ){
//         count++;
//     }
// }
// console.log(count);
// }

// countVowels("Arunssdsd");

//=====================arrow fuction========
// let countVowels = (string) => {
//     let count = 0;
//     for (let i = 0; i < string.length; i++) {

//         if (string[i] === "a" || 
//             string[i] === "e" || 
//             string[i] === "i"  ||
//             string[i] === "o" || 
//             string[i] === "u" ||
//             string[i] === "A" || 
//             string[i] === "E" || 
//             string[i] === "I"  ||
//             string[i] === "O" || 
//             string[i] === "U"){
//         count++
//     }
// }
// console.log(count)
// }
// countVowels("AIOaio");



//=================================66===============

// let values = [2,3,4,5,6,7,8];  //does not return an new array
// values.forEach( (value,id,ss) => {
//     console.log(value * value);
//     console.log(id);
// console.log(ss);
     
// });


// const numbers = [10, 20, 30, 40];
// numbers.forEach(value => {
//     console.log(value);
// });

// const numbers = [10, 20, 30, 40];
// numbers.forEach((value,ind) => {
//     console.log(`index ${ind} -> ${value}`);
// });

// const prices = [100, 200, 300];
// prices.forEach((value,idx,arr) => {
//    arr[idx] = value + (value * 18 / 100);
// });
// console.log(prices)

//how many even no in this array
// const nums = [1, 2, 3, 4, 5, 6];
// let count = 0;
// nums.forEach(value => {
//    if(value % 2 === 0){
//     count++
//    }
// })
//    console.log(count);

// const fruits = ["apple", "banana", "mango"];

// function showFruit(fruit,idx,arr){
//     console.log(`index ${idx} fruit ${fruit}`)
// }

// fruits.forEach (showFruit) ;


//filter 

// let marks = [100,200,40,50,30,90];
// let newArr = marks.filter(num => num >= 90);
// console.log(newArr);

//reduce in js

// let mark = [100,200,40,50,30,90];
// let topArray = mark.filter((num) => {
//     return num >=90;
// })
// console.log(topArray)

// let  num = prompt("enter number here");
// let number = [];
// for(let i=1; i<=num;i++){
//     number[i-1] = i
// }
// console.log(number);

// let cacSum = number.reduce((tot,curr) =>{
//     return tot + curr;
// })
// console.log(cacSum);

// let factorial = number.reduce((tot,curr) =>{
//     return tot * curr;
// })
// console.log(factorial);








//=====================PRACTICE SET===========================
// Problem 1
// Convert the following normal function into an arrow function:

// function square(num) {
//   return num * num;
// }
///=============solution    
/* let mul = num => {
    return num * num
}
console.log(mul(2)) */


//=====================PRACTICE SET===========================

/* Write an arrow function that:
Takes two numbers
Returns the greater number*/

///=============solution    


//=====================PRACTICE SET===========================
/*const fruits = ["apple", "banana", "mango"];
Use forEach() to:
Print each fruit with its index*/

///=============solution    
// const fruits = ["apple", "banana", "mango"];

// fruits.forEach((fruit , idx, arr) => {
//     console.log(idx ,fruit )
// });


//=====================PRACTICE SET===========================

/*const numbers = [2, 4, 6, 8];
Use forEach() to:
Calculate the sum of all numbers
Store the result in a variable */

///=============solution    
// const numbers = [2, 4, 6, 8];
// let sum = 0;
// numbers.forEach((num) =>{
//     return sum = sum + num;
// })
// console.log(sum)


//=====================PRACTICE SET===========================
/* const numbers = [1, 2, 3, 4];
Use map() to create a new array where:
Each number is multiplied by 5 */
///=============solution    

/* const numbers = [1, 2, 3, 4];
let mul = numbers.map(num => num *5);
console.log(mul) */

//=====================PRACTICE SET===========================
/* const names = ["arun", "rohit", "neha"];
Use map() to:
Convert each name to uppercase*/

///=============solution    
/*const names = ["arun", "rohit", "neha"];

let nam = names.map(n => n.toUpperCase());
console.log(nam) */

//=====================PRACTICE SET===========================

/*const numbers = [10, 25, 30, 15, 40];
Use filter() to:
Get numbers greater than 20*/

///=============solution    

/*const numbers = [10, 25, 30, 15, 40];
let f = numbers.filter((tot) =>
    tot>20
);
console.log(f)*/

//=====================PRACTICE SET===========================
/*const users = [
  { name: "Arun", age: 22 },
  { name: "Ravi", age: 17 },
  { name: "Neha", age: 19 }
];
Use filter() to:
Get users whose age ≥ 18*/


///=============solution    
