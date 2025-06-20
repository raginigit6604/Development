// Objects

let person = {
    name: "Ragini",
    id: 96,
    profession: "Software developer",
    skills: ["HTML","CSS","JavaScript"]
}
console.log(person);
console.log(person.skills);
console.log(person.skills[0]);
console.log(person.skills[2]);
console.log(person["profession"]);

// Arithmetic Operstors
// +,-,*,/, **

console.log(Math.pow(2,5)); // 2^5
console.log(2**5); // it is same as power function
console.log(Math.sqrt(9));

// Assignment Operators

// Condititonal Operators
 let a = 10;
 let b = "10"
 if(a==b){
    console.log(true);
 }
 if(b==a){
    console.log(true);
 }

 if(a === b || b==a){
    console.log(false);
}
if(a === b && b==a){
    console.log(true);
}
 if((a===b || a== b) || (a===b && b==a) && (a==b)){
    console.log("true");
}else{
    console.log("false");
}

// ternary operator

(a===b ? console.log("true statement"): console.log("false statement"))
let result = (a==b ? true : false);
console.log("result => ",result);

// chaining
(a==b ? (a===b ? console.log("a and b are both equal"): console.log("a and b are of different data type")): console.log("not equal"));

//loops
let arr = [1,2,3,4,5,6];
// for of loop
for(let i of arr){
    console.log(i); // here we print elements of array because we use for of loop 
}
// for in loop == it is used in objects

for(let key1 in arr){
    console.log(key1); // here we print indexes of array because we use use for in loop 
}
let person2 = {
    name: "Ragini",
    id: 96,
    profession: "Software developer",
    skills: ["HTML","CSS","JavaScript"]
}
for(let key in person2){
    //console.log(key,"->",person2.key) // not work in string
     console.log(key,"-:",person2[key]);
}

