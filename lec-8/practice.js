// let menu = [
//     "Burger","Pizza","Panner","Momos","Cake","Ice-Cream","Golgaape","Springroll",
// ]


console.log("\n   question no . 1  \n");
let menu = [
    "roti","pizza","rice","egg","egg-rice","paneer","dal","egg-curry","chicken","chicken-fries","matat-paneer","daal-makhani"
]

// filter out veg and non veg

let nonveg = menu.filter((item)=>{
    return item.includes("chicken") || item.includes("egg");
})
console.log(nonveg);
let vegt = menu.filter((item)=>{
    return !(item.includes("chicken") || item.includes("egg"));
})
console.log(vegt);


console.log("\n   question no . 2  \n");

// filter out all the products which are white and wearble
let products = [
  {
    name: "product 1 name",
    category: "wearable",
    color: ["red", "white"]
  },
  {
    name: "product 2 name",
    category: "playable",
    color: ["black", "silver"]
  },
  {
    name: "product 3 name",
    category: "wearable",
    color: ["blue", "white"]
  },
  {
    name: "product 4 name",
    category: "playable",
    color: ["white", "gray"]
  },
  {
    name: "product 5 name",
    category: "playable",
    color: ["gold", "black"]
  },
  {
    name: "product 6 name",
    category: "wearable",
    color: ["orange", "black"]
  },
  {
    name: "product 7 name",
    category: "wearable",
    color: ["purple", "pink"]
}  
];
let f = products.filter((num)=>{
    return num.category == "wearable" && num.color.includes("white");
})
console.log(f);
// console.log("\n   question no . 3  \n");

// new Promise((resolve) => {
//   resolve(5);
// })
//   .then((num) => {
//     console.log("First then:", num);
//     return num * 2;
//   })
//   .then((num) => {
//     console.log("Second then:", num);
//     return num - 3;
//   })
//   .then((num) => {
//     console.log("Final then:", num);
//   }); 

// console.log("\n   question no . 4  \n");

// console.log("A");
// Promise.resolve().then(()=>{
//     console.log("B");
// });
// console.log("C");
// setTimeout(()=>{
//     console.log("D");
// },0);
// console.log("E");

console.log("\n   question no . 4  \n");

console.log("X");
new Promise((resolve)=>{
    console.log("Y");
    resolve();
})
.then(()=>{
    console.log("Z");
    return Promise.resolve("W");
})
.then((val)=>{
    console.log(val);
});
console.log("end");
