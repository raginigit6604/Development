// Higher Order Functions and call back functions

function helper(){
  console.log("helper function is executing..");
}
function higherorder(fun){
    console.log("Higher Order executing..");
    let res = fun();
    return res;
}
higherorder(helper);

function helper1(){
  console.log("helper function ");
  return 10;
}
function higherorder1(fun){
    console.log("Higher Order ");
    let res = fun();
    // return res+5;
    return +(res)+5;
}
let result = higherorder1(helper1);
console.log(result);

let result2 = higherorder1(function(){
    console.log("this is anynomous function");
    return 20;
    // return "20"; // in the case of string it concatenate and give value 205
})
console.log(result2);


// Call Back function

function cb(A,b){
    console.log("callback functions");
    return A+b;
}

function parent(a,b,fun){
    console.log("higher order executing");
    let sum = a+b;
    // let result = fun(sum,20);
    // return result;
    // we can also write these two above lines like this
    return fun(sum,20);
}

let ans2 = parent(10,20,cb);
console.log(ans2);

let arr=[2,3,4,5,6];
function square(num){
    return num* num;
    // return num**2;
}

function cube(num){
    return num*num*num;
    //return num**3;
}
function arrayconverter(array,fun){
    let ar = [];
    for(let element of array){
       let powval = fun(element);
       ar.push(powval);
    }
    return ar;
}

let squarearray = arrayconverter(arr,square);
console.log(squarearray);
let cubearray = arrayconverter(arr,cube);
console.log(cubearray);


