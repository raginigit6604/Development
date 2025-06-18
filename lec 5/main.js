console.log("hello world");
let b="hello";
b = "world";
var a= 10;
console.log(b);
{
  // only work for let and const
//   console.log(b);
  let b = 30;
  console.log(b);
}
const c = true;
let d = 20;
d= 30;
const arr = [1,2,3,4,5];
arr[1] = 10; //tjis is uodation

// arr = [6,7,8,9,10] // this is reassignment and in const it is not allowed


var a = 40;
{
    console.log(a);
    var a = 50;
    console.log(a);
}


console.log(temp);
var temp = "this is temp";
console.log(temp);

// in the case of let it gives error because variable is not declaed
// console.log(temp2);
//dead temporal zone (unless it is assignend a value)
let temp2 = "this is temp2";
console.log(temp2);


console.log(ar);
var ar;
console.log(ar);
 ar = 10;
 console.log(ar);

 let Arr = [1,2,3,'item 4',true,null,undefined]
 console.log(Arr[3]);

 let twodarr = [
    [1,2,3],
    [2,4,6],
    [3,6,9]
 ]
 console.log(twodarr);
 console.log(twodarr[1][2]);
 for(var i=0;i<3;i++){

 }

console.log(i);

var a= 1;
{
    var a=2;
    {
        var a = 3;
        console.log(a);
    }
}

// it gives error because we cann't redeclare with let = a
// var a= 1;
// {
//     let a=2;
//     {
//         var a = 3;
//         console.log(a);
//     }
// }

// {
//     var x = 10;
//     let x = 20;
//     //error as is declared with let and can't be declared again
//     console.log(x);
// }

// {   // here also give error
//     let x = 20;
//     var x= 10;
//     console.log(x);

