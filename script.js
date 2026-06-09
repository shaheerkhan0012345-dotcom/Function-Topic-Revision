

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
 

let sumfunc = (a,b) =>{
     console.log(a + b)
}



let mulfunc = (a , b) =>{
    console.log(a * b)
}



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



let vowelCount = (str) =>{
        let count = 0;
    for( let char of str){
        if(
            char=== "a" || 
            char === "e" || 
            char === "i" || 
            char === "o" || 
            char === "u"){

                count++;
        }
    }

    console.log(count)
}
