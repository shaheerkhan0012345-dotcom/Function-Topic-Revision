

//NO1 
// function myFunction(){
//     console.log("Shaheer Is Great")
// }


// myFunction();


// NO 2


// function shaheer(msg, n){
//     console.log(msg, n)
// }


// shaheer("Love U Jani",100)



//No 3 (sum calculation)

// function sum(x , y){

//     console.log(x+y);

// }


// sum();


//No4

// function func(x,y){

//     s = x+y;

//     return s;
// }
// let val = func(3 ,4)

// console.log(val);



// No 5 (ARROW FUNCTION) COMPACT WAY
 

// let sumfunc = (a,b) =>{
//      console.log(a + b)
// }



// let mulfunc = (a , b) =>{
//     console.log(a * b)
// }



//QUESTION

// function task(str){

//     let count = 0;
//     for( let char of str){
//         if(
//             char=== "a" || 
//             char === "e" || 
//             char === "i" || 
//             char === "o" || 
//             char === "u"){

//                 count++;
//         }
//     }

//     console.log(count)
// }



// let vowelCount = (str) =>{
//         let count = 0;
//     for( let char of str){
//         if(
//             char=== "a"  || 
//             char === "e" || 
//             char === "i" || 
//             char === "o" || 
//             char === "u"){

//                 count++;
//         }
//     }

//     console.log(count)
// }


// let arr = [1, 2, 3, 4]


// arr.forEach(function printval(val){
//     console.log(val);
// });


// callback function


// let arr = [1, 2, 3, 4]

// arr.forEach((val)=>{

//     console.log(val)
// });


//with string

// let arr = ["apple", "banana", "cucumber","carrot"]

// arr.forEach((value =>{
//     console.log(val)
// }));


// string wit uppercase


// let arr = ["hammad" , "shaheer", "zunaira"]

// arr.forEach((val) =>{

//     console.log(val.toUpperCase())

// });


//  let arr = ["KHNA" , "RANA", "MUGHAL"]

//  arr.forEach((val, idx, arr)=>{
//     console.log(val.toLowerCase(), idx, arr)
//  });



//  Q; for a given array of number,print the square of each 
// value using foreachloop

// let nums = [2, 3, 4, 5];

// nums.forEach((num) =>{
//     console.log(num*num)
// })


// Properly


// let num = [22, 33, 55, 66];

// let calSquare = (num =>{
//     console.log(num*num);
// });


// num.forEach(calSquare);


// Map

//when use for print value

// let num = [32, 45, 84, 13];

// num.map((val) =>{
//     console.log(val)
// })


// When use for making new array

// let num = [21, 46, 87, 10];

// let newArray = num.map((val) => {
//     return val*val;

// });

// console.log(newArray);




// filter array method

// let arr = [1, 2, 3, 4];

// let newArr = arr.filter((val) =>{
//     return val % 2 == 0;
// })

// cosole.log(newArr)


// filkter to find val > 3


// let arr = [1, 2, 3, 4];

// let newArr = arr.filter((val) =>{
//     return val > 3;
// })

// console.log(newArr)\

let num = [1,2,3,4];


let newNum = num.reduce((res,curr) =>{

    return res + curr;

})

console.log(newNum)