// Array methods

//unshift is used for add item at begining
arr=[1,2,3,4,5]
arr.unshift(50,44,45)
console.log(arr);

// shift is used to delete element from begining and pop is used to delete element form last
arr.shift();
console.log(arr);

let aa=[3,4,5,67,78]
let subarr = aa.slice(2); // starts from 2nd index and ends at last
let a = [5,7,8,9,3,4];
let subarr1 = a.slice(2,3); // starts from index 2 and ends before index 3
console.log(subarr);
console.log(subarr1);

// to delete leemnts from middle, begining, or end
// splice - 3 working

console.log(aa);

aa.splice(3,1); // here 3 is index and 1 is the no. of eleemnts that i want to delete so 3rd index ke baad  1 elements  delete hoga
console.log(aa);
aa.splice(3,3); // delete three elements at index 3
console.log(aa);

aa.splice(1,0,10);
console.log(aa);

let arr1 = [0,1,2,3,4,5,6,7,8]
arr1.splice(1,0,10,11,12,13)
console.log(arr1);

let strarr = arr1.toString();
let stra = arr1.join(" ");
console.log(stra);
console.log(strarr);