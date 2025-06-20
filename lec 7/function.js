// Functions

function fun(){
    console.log("functions");
}
let result = fun();
console.log(result); // it give undefined because we can't return anyhting so by default value is undefined

function fun2(){
    console.log("fun");
    return 5;
}
let result2 = fun2();
console.log(result2); 
console.log(fun());
console.log(fun2());

function fun3(){
    return 10 + 40;
}
console.log(fun3());

function sum(a,b){
    return a + b;
}
let ans1 = sum(100,300);
console.log(ans1);
let ans = sum(b=100,a=200);
console.log(ans);

function fun4(a,b,c){
    return a+ b+ c;
}
let res = fun4(1,2);
console.log(res); // it gives NaN that means not a number bacause we plus 1 + 2 + undefined so it gives NaN

// to prevent from default arguments
function fun5(a=0,b=0,c=0){
    return a+b+c;
}
let resu = fun5(1,2,7);
let resul = fun5(1,2);
console.log(resu);
console.log(resul);

function s(){
    return {
        name:"ragini",
        work:"nothing"
    }
}
console.log(s());

// Arrow functions

let arrowfun = ()=>{
    console.log("Arrow Function");
    return "return from arrow function";
}
let arrowresult = arrowfun();
console.log(arrowresult);
console.log(arrowfun());

let arroefun2 = (a,b)=>{
    console.log("this is arrow function");
    return a+b;
}
console.log(arroefun2(30,40));

// here we create the same name of function as multiple times
// Hoisting in javascript
function f(a){
    return a;
}
function f(a,b){
    return a+b;
}
let re = f(2,3);
console.log(re); // it gives NaN  because jo hmne sbse last function ko call kiya hai uska hi output print hoga

function f(a,b,c){
    return a+b+c;
}
let rest = f(7,8,20);
console.log(rest);
