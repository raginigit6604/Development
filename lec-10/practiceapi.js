
// api : https://randomuser.me/api/
// We have to make - random user profile, give a refresh button to get new user, onpage refresh the user should be persist

// fetch user from api
async function fetchuser(){
    const response = await fetch ("https://randomuser.me/api/");
    const data = await response.json();
    return data.results[0];
}

// it shows user data on page
function displayuser(user){
    document.getElementById("photo").src = user.picture.large;
    document.getElementById("name").innerText = `${user.name.title} ${user.name.first} ${user.name.last}`;
    document.getElementById("email").innerText = user.email; 
    document.getElementById("birthday").innerText = new Date(user.dob.date).toDateString(); 
    document.getElementById("address").innerText = `${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.country}`;
    document.getElementById("mobileno").innerText = user.phone;
    document.getElementById("password"),innerText = user.login.password;
}

// fucntions to save in localstorage
function saveuser(user){
    localStorage.setItem("randomuser",JSON.stringify(user));
}

// get new user and display
async function getnewuser() {
    const user = await fetchuser();
    displayuser(user);
    saveuser(user);
}
// function load from localstorage
function loadsavesuser(){
    const userdata = localStorage.getItem("randomuser");
    try{
        const user = JSON.parse(userdata);
        if(user){
        displayuser(user);
       }else{
        getnewuser();
      }
}catch(err){
    //  console.log("Invalid user");
    localStorage.removeItem("randomuser");
     getnewuser();
}
}

window.onload = loadsavesuser;



