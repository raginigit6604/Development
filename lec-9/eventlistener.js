const h1 = document.querySelector("h1");

h1.addEventListener("click",(e)=>{
    console.log(e.target);
    h1.classList.toggle("background");
    console.log("h1 clicked");
});

const input = document.getElementById("textInp");
h1.children[0].addEventListener("click",(e)=>{
    e.stopPropagation(); // stop the event from bubbling up
    console.log("span clicked");
    input.value = "";
})

// input event  
input.addEventListener("change",(e)=>{
    console.log(input.value); // the both are same input.vakue == e.target.value
    console.log(e.target.value);
})