// Map

let arr = [1,2,3,4,5,6,7,8,9,0];

console.log("____________Squares__________________")
function square(num){
    return num* num;
    //return num**2;
}
let ans = arr.map(square);
console.log(ans);

// Alternate Method 

 let sqarr = arr.map(function(num){
    return num * num;
 })
 console.log(sqarr);
 // arrow method
 let sqar = arr.map((num)=>{
    return num * num;
 })
 console.log(sqar);

console.log("__________Cube_____________");

function cubic(num){
    return num* num *num;
    //return num**3;
}
let ans1 = arr.map(cubic);
console.log(ans1);

 let cubarr = arr.map(function(num){
    return num**3;
 })
 console.log(cubarr);

 let cube = arr.map((num)=>{
    return num** 3;
 })
 console.log(cube);

 // Filter : - it is used to get specific elements based on the condition
 // it returns a new array with all elements that pass the test implemented by the provided function

   console.log("__________Check Even Odd_____________");
  a=[1,2,3,4,4,55,5,5,78,9];

  function checkodd(num){
        return num%2 == 1;
    }
    function checkeven(num){
        return num % 2 == 0;
    }
  let evenar = a.filter(checkeven);
  console.log(evenar);
  let oddar = a.filter(checkodd);
  console.log(oddar);



