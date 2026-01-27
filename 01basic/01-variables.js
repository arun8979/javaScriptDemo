console.log("hi 22 i am arun")
console.log("i love java script!");

age = 24;
let name = "arun singh";
radius = 23;
radius = 23;

console.log(age);
console.log("age");
console.log(radius + 1);


const a = 10;
console.log(a);

{
let fullName = "arun";
console.log(fullName);

 }   //its a block scope
// console.log(fullName);  can not accessable 




{
var lastName = "arun rawat"
console.log(lastName);

}
// console.log(lastName);



// OBJECT:
const student = {
    fullname : "arun",
    isPass : true,
    cgps : 5.2,
    age : 24

}
console.log(student);
console.log(typeof(student));
console.log(student.isPass);
console.log(student["age"]);  //another methode to get value
console.log(student.fullname);
console.log(student.cgps);

student["age"] = student["age"] + 10;
console.log(student["age"]);





// String
let fullName = "arun singh rawat";
console.log(fullName);
console.log(typeof(fullName));



// Number 
const old = 24;
console.log(old);
console.log(typeof(old));



// undefind 
let value;
console.log(value);
console.log(typeof(value));



// null 
let cast = null;
console.log(cast);
console.log(typeof(cast));



// bigint 
let rollNumber = BigInt(12345);
console.log(rollNumber);
console.log(typeof(rollNumber));



// boolean 
let eightPlus = true;
console.log(eightPlus);
console.log(typeof(eightPlus));           


// operator in js

// arithamatic operator we have (+,-,/,*)
let z = 2;
let b = 10;
let c = z + b;
let d = z - b;
let e = z * b;
let f = z / b;
console.log(c)
console.log(d)
console.log(e)
console.log(f)

//modulor operator(%,**)
let zz = 13;
let bb = 2;

console.log(zz%bb)
console.log(zz**bb)

//unary operator(a++, b--, ++a, --b)
let zzz = 12;
let bbb = 8;

console.log(zzz++);  //post increment
console.log(++zzz)

console.log(--bbb);  //pre decrement
console.log(bbb)

//Assignment operator (=, +=, -=, /=, *= **=, %=)
let x = 10;
let u = 12;
//  console.log(x=u);
//  console.log(x);

 console.log(x+=1);
 console.log(x-=2);
 console.log(x**=2);

//comparison operator
let r = 10;
let i = "10";
 console.log(r==i);
 console.log(r===i);
 console.log(r>=i);
 console.log(r!==i);
 console.log(!r>=i);

//logical operator(&&, || !)

let rr = 23;
let uu = 34;
 
console.log(uu >= rr && rr !== uu);
console.log(rr>uu && rr==uu)

 console.log(rr===uu || rr<uu || rr>=uu);

 console.log(!rr>=uu);



 let num = prompt("type an number")
 if(num % 5 === 0){
    console.log(num , "yes multipler of 5")
 }else{
    console.log(num, "not multipler of 5")
 }







 




