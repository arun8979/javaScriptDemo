let num = [2,3,5,1,34];
console.log(num);

let fruits  = ["mango", "banana", " oranage" , "apple"];
console.log(fruits);
console.log(fruits.length);

console.log(fruits[0]);
fruits[2] = "litchi"
console.log(fruits);


let str = "hello";
console.log(str[0]);

// looping over arrays

let fruitss = ["peach","mango", "banana", "oranage" , "apple","guava", "papaya", "pomgrenate"];
for(let i = 0; i<fruitss.length; i++){
    console.log(fruitss[i]);
}


// let fruits1 = ["peach","mango", "banana", "oranage" , "apple","guava", "papaya", "pomgrenate"];
// for(let fruit2 of fruits1){
//     console.log(fruit2)
// }

// let m = "arunsinghrawat";
// for(let mm of m){
//     console.log(mm) ;
// }


// give an array and to convert uppercase
//alwasy use for of with array 
let freedomFighter = ["mahatma gandhi","sukhdev","rajguru","bhagat singh","lalbahadur sastri","subhash chand boss"]
for(heros of freedomFighter){
    console.log(heros.toUpperCase());
}

// practice question

// for loop
let marks = [85,97,37,44,76,60];
let sum = 0;
for(let i=0; i<marks.length; i++){
    sum += marks[i];
}
let average1 = sum / marks.length;
console.log(average1);
console.log(sum);


// for off loop
let markss = [85,97,37,44,76,60];
let sums = 0;
for(let score of markss){
    sums += score;
}
console.log(sums)
let average = sums / markss.length;
console.log(average);

let name = "arun";
console.log(`my name is ${name}`);  //called templet litrals


///another practice question

let items = [250,645,300,900,50];

for(let i =0; i<items.length; i++){
    let offer = items[i]/10;
    items[i] = items[i] - offer
    
}
console.log(items);



// you have an array of prices: [100, 200, 300, 400].  
// Add 18% sales tax to each price and print the updated array.

let prices = [100,200,300,400];
for(let i =0; i<prices.length; i++){
let salesTax = prices[i] * 18 / 100;
prices[i] += salesTax
}
console.log(prices)

// Given an array of numbers: [5, 10, 15, 20],  
// double each value and store in the same array.

let numbers = [5,10,15,20];
for(let i=0; i<numbers.length; i++){
    numbers[i] *= 2;
}
console.log(numbers)


// Array of salaries: [25000, 30000, 35000, 40000]  
// Increase each salary by 12% and print the new array.

let salaries = [25000, 30000, 35000, 40000]  ;
for(let i=0; i<salaries.length; i++){
    let Increase = salaries[i]*12/100;
    salaries[i] += Increase
}
console.log(salaries)


// Array of Celsius temperatures: c
// Convert each temperature to Fahrenheit using formula F = C * 9/5 + 32


let temp = [0, 20, 37, 100]  ;

for(let i=0; i<temp.length; i++){
//     let convertFahrenheit = temp[i] * 9/5;
// //    temp[i] =convertFahrenheit +  32;
temp[i] = temp[i] * 9/5 + 32;
}
console.log(temp)


// Array of prices: [30, 60, 90, 20, 150]  
// Apply 20% discount to each, then print only discounted prices greater than 50.

let prices2 = [30, 60, 90, 20, 150];
let discounted = [];

for (let i = 0; i < prices2.length; i++) {
    let priceAfterDiscount = prices2[i] - prices2[i] * 0.2; // 20% discount
    if (priceAfterDiscount > 50) {
        discounted.push(priceAfterDiscount);
    }
}

console.log(discounted);


// Array: [2, 3, 4, 5, 6]  
// Replace each element with its square and print the array.

let array = [2, 3, 4, 5, 6] ;
for(let i=0; i<array.length; i++){
array[i] = array[i] * array[i]
}
console.log(array);


// Array: [1, 2, 3, 4, 5, 6]  
// Multiply only even numbers by 2 and update the array.

let Arrays =  [1, 2, 3, 4, 5, 6];
for(let i=0; i<Arrays.length; i++){
 if(Arrays[i] % 2 === 0){
 
 Arrays[i] = Arrays[i] * 2;
 }
}
console.log(Arrays);


// Array: ["apple", "banana", "cherry"]  
// Convert each string to uppercase and print the updated array.

 let fru =  ["apple", "banana", "cherry"];
 for(let i=0; i<fru.length; i++){
fru[i] = fru[i].toUpperCase();

 }
console.log(fru)



// Array: [1, 2, 3, 4, 5]  
// Update each element to be the sum of itself and all previous elements.
// Output: [1, 3, 6, 10, 15]
let numbers2 = [1, 2, 3, 4, 5];

for (let i = 1; i < numbers2.length; i++) {
    numbers2[i] = numbers2[i] + numbers2[i - 1];
}

console.log(numbers2);

// Array of scores: [45, 78, 88, 32, 90]  
// Add 5 marks to scores less than 50 and print the updated array.


let scores = [45, 78, 88, 32, 90]  ;
 for(let i=0; i<scores.length; i++){
    if(scores[i] < 50){
        scores[i] += 5
    }
 }
 console.log(scores);





 //PUSH TO ADD A VALUE IN LAST POSITION OF ARRAY
 let n = [1, 2, 3, 4, 5];
n.push(23);
console.log(n)


//POP METHODE TO DELTE LAST VALUE IN ARRAY
n.pop();
console.log(n)


//tosTRING CONVERT
let fr = ["apple", "mango", "litchi"];
console.log(fr.toString());  // crete an string not change an original array
console.log(fr )

//concate TO ADD TWO array
let m = ["kilo","cm","mm","mm"];
let c = ["dd","cc",]
let newArray = m.concat(c);
console.log(newArray);
console.log(m);
console.log(c);

//splice

let dd = [23,23,24,25,26];
let ss = dd.splice(1,1,16);
console.log(dd);
console.log(ss)

//unshift
//add an number in postion of 0th index
let dd1 = [23,23,24,25,26];
dd1.unshift(12)
console.log(dd1)

//shift
//delete a 0 index value 
let dd2 = [23,23,24,25,26];
dd2.shift(12)
console.log(dd2)

//slice
let dd3 = [23,23,24,25,26];
let t = dd3.slice(1,2);
console.log(t)

let company = ["microsoft","uber","ola","relienc","tata"];
//remove first comapny
company.shift();
console.log(company)

//remove uber add elevn in the place
company.splice(1,1,"elevn")
console.log(company)

//add amazone at the end
company.push("amazone")
console.log(company)




