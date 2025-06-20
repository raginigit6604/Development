function cb(x){
    console.log("calback function",x);
    return function(y){
        console.log("inner function",y);
        return x + y;
    };
}

function higher(callback){
    console.log("higher order function");
    let innerfunction = callback(5);
    console.log("this is below call");
    return innerfunction(10);
}
console.log(higher(cb)); 

console.log("_____________________________________________________");

function cbb(x){
    console.log("callback function",x);
    if( x> 10){
        return "greater than 10";
    }else{
         return "less than or equal to 10";
    }
}

function higher1(callback,value){
    console.log("Higher order function");
    let ans = callback(value);
    console.log("this is below call");
    return ans;
}
console.log(higher1(cbb,12));
console.log(higher1(cbb,8));


console.log("_____________________________________________________");
function cbbb(){
    console.log("callback function");
    return function(){
        console.log("inner function 1");
        return function(){
            console.log("inner function 2");
            return "final return";
        };
    };
}

function higher3(callback){
    console.log("higher order function");
    let innerfunc = callback();
    console.log("this is below call 1");
    let innerfunc2 = innerfunc();
    console.log("this is below call 2");
    return innerfunc2();
}
console.log(higher3(cbbb));

console.log("______________________________________________________");
// take an input number from user and console wheteher the number is 0 , less than 0 or greater than 0 use both if else conditon and ternary operator to solve this question
let num = prompt("Enter the number");
console.log(num,typeof(num)); // here num is always string so we need to convert it to number using parseInt() or Number() function
console.log("By if-else condition")
function check(num){
   if(num > 0){
    console.log("number is greater than 0");
   }else if(num < 0){
    console.log("number is less than 0");
   }else if(num == 0){
    console.log("number is 0");
   }else{
    console.log("this is a word");
   }
}
check(num);

// By ternary operator
console.log("By ternary operator");
(num == 0) ? console.log("Number is zero") :((num > 0)?(console.log("number is greater than 0")) :((num < 0) ? console.log("number is less than 0") : console.log("this is a word")));