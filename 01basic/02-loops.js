// //we have THREE type of loop in js
// //for loop and while loop

// let sum = 0;
// for(let i=1; i<=10; i++){
// sum = sum + i;
// }
// console.log(sum);



// for(let i=0; i<=5; i++){
//     console.log("arun")
// }

// let i = 1;
// while(i<=10){
//     console.log("i =" , i);
//     i++;
// }

// let j = 1;
// while(j<=5){
//     console.log("arun");
//     j++;

// }


// let k = 90;
// do{
//     console.log("arun");
//     k++;
// }while(k<=100);

// //for of loop

// let arrr = "arunsinghrawat"
// let size = 0;
// for(let i of arrr){
//     console.log(i)
//     size++
// }
//     console.log(size)


// //for in loop

// let student = {
//     name : "arun",
//     age : 24,
//     isPass : true,
//     cgpa : 2.5
// }

// for(let key in student){
//     console.log("key = " +  key ,  "value = "  + student[key])
// }



// //practice

// //print all even number from 0 to 100

// for(let i =0; i<=100; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }

// //question no 2

// // let gameNo = 25;
// // let userNo = prompt("guess the no between 1 to 30");

// // while(gameNo != userNo){
// //     userNo = prompt("you enter wrong num guess again!")
// // }
// // console.log("congratulation you are right")

// // let gameNo = 10;
// // let userNo;

// // do{
// //     userNo = prompt("guess the np between 1 to 30")

// //     if(userNo> gameNo){
// //         console.log("to high no");
// //     }else if(userNo< gameNo){
// //         console.log("to low no");
// //     }
// // }while(gameNo != userNo)
// //         console.log("congratulation you choose right number");




//String

let fullName = prompt("enter your full name here");
// fullName = fullName.split(" ").join("");
fullName = fullName.replace(/\s+/g,"")
let userName = "@" + fullName  + fullName.length;
console.log(userName)