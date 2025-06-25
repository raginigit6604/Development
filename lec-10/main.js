localStorage.setItem("name","ragini");
console.log(localStorage.getItem("name"));

const obj = {
    name: "Ragini",
    arr: [1,2,3,"5"]
}

console.log(JSON.stringify(obj));
// stringify convert object into string
localStorage.setItem("obj",JSON.stringify(obj));
console.log("Storage item :-  ",localStorage.getItem("obj"));
let storeobj = JSON.parse(localStorage.getItem("obj")); // JSON.parse convert string into integer
console.log(storeobj.name);

// const h1 = document.getElementsByTagName("h1")[0];
// const getQr = async(url)=>{
//     let res = await axios.get(`https://api.api-ninjas.com/v1/qrcode?format=png&data=${url}`,{
//         headers:{
//             "X-Api-Key" : "+i07+7oSQf7VbRlCxVVaEA==spGq49tSuIMmqjfi"
//         }
//     })
//     const img = document.createElement("img");
//     img.src= windows.btoa(res.data);
//     h1.after(img)
// }

// getQr("https://raginigit6604.github.io/Practice-Development-Project/");


