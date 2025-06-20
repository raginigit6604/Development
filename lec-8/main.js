
// Synchronous Part in Javascript
let arr = [
    {
        name: "Ragini",
        id: 10,
    },
     {
        name: "Priya",
        id: 20,
    },
     {
        name: "Shivam",
        id: 30,
    },
     {
        name: "Shivam B",
        id: 40,
    }
]

// ... = spread operator used to copy another object of array
let numberArr = [1,2,3,4,5,6];
let newnumberArr = [...numberArr,7,8,9,10];
console.log(newnumberArr);

arr = arr.map((obj,index)=>{
     return{
        ...obj,
        // name:"changed name",  // overwrite old key's value
        // id : index+1 // new key and its value
        salary: (index + 1)*1000
     }
})

console.log(arr);
let newArr = arr.filter((person)=>{
    return (person.id >= 23);
})
console.log(newArr);

let salarysum = arr.reduce((accum,person)=>{
    return accum+person.salary;
})


let a= [1,2,3,4,5,6,7]
//accumulator is used to store the sum here 0 is the initial value provide by accumulator
let sum = a.reduce((accum,num)=>{ 
      return num+ accum
},0)

let multiply = a.reduce((accum,num)=>{ 
      return num * accum
},1)

console.log(sum);
console.log(multiply);


// Find = it is same as filter but return first matching element 
let result = arr.find((person)=>{
    return (person.id ==30)
})
console.log(result);

let result1 = arr.find((person)=>{
    return (person.id < 30)
})
console.log(result1);

// For each loop
a.forEach((element)=>{
    console.log(element);
});
arr.forEach((element)=>{
    console.log(element);
});


