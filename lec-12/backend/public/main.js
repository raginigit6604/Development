const btncontainer = document.getElementById("btncontainer");
const form = document.getElementById("form");
const todocontainer = document.getElementById("todocontainer");
const clearcompleted = document.getElementById("clearcompleted");

clearcompleted.addEventListener("click",async (e)=>{
    // e.preventDefault();
    const res = await axios.delete(`http://localhost:5000/clearcompleted`);
    render(res.data.todos);
})

todocontainer.addEventListener("click",async (e)=>{
    // console.log(e.target.parentElement.parentElement) // to remove chaining parentElement.parentElement 
    if(e.target.id == "delete"){
        const id = e.target.parentElement.id;
        const res = await axios.delete(`http://localhost:5000/taskmaster/${id}`);
        render(res.data.todos);
    }
    if(e.target.id=="comp"){
        const id = e.target.parentElement.id;
        const res = await axios.put(`http://localhost:5000/taskmaster/${id}`);
        render(res.data.todos);
    }
})

form.addEventListener("submit",async (e)=>{
    e.preventDefault();
    const tasktext = e.target.children[0].value;
    // trim is removing extra white spaces
    if(tasktext.trim().length == 0){
        alert("Please Enter a task");
        return;
    }
   
    let result = await axios.post("http://localhost:5000/taskmaster",{task:tasktext});
    render(result.data.todos);
    // e.target.children[0].value = ""; // both line have same working to clear input field
    form.reset(); // to clear input field
});

function render(todos){
    todocontainer.innerHTML = "";
    for(let todo of todos){
        let div = document.createElement("div");
        div.id = todo.id;
        div.className = "flex w-full justify-between items-center p-2 border rounded bg-gray-200 shadow-md"
        div.innerHTML = `${todo.task}
        <div id=${todo.id} class="flex gap-2">
        <button id="comp" class ="bg-green-700 hover:bg-green-300 px-3 py-1 rounded-lg cursor-pointer text-white">${todo.completed?"Undo":"Complete"}</button>
        <button id="delete" class="bg-red-500 hover:bg-red-300 px-3 py-1 rounded-lg cursor-pointer text-white">Delete</button>`
        todocontainer.append(div);
    }
}

async function getalltodos(){
    let res = await axios.get("http://localhost:5000/taskmaster");
    render(res.data.todos);
}

getalltodos();

async function filtertodos(filter){
    let res = await axios.get("http://localhost:5000/taskmaster/filter",{
        params: {
            filter:filter
        }
    });
    render(res.data.todos);

}

btncontainer.addEventListener("click",(e)=>{
    if(e.target.id=="active" || e.target.id=="all" || e.target.id=="completed"){
       for(let btn of btncontainer.children){
            btn.classList.remove("bg-green-500")
            btn.classList.remove("text-white")
       };
        e.target.classList.add("bg-green-500");
        e.target.classList.add("text-white");
    }
    if(e.target.id=="active"){
       filtertodos("active");
    }else if(e.target.id == "completed"){
       filtertodos("completed")
    }else if(e.target.id == "all"){
       filtertodos("all");
    }
})