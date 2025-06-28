const createUser = async()=>{
    let res = await axios.post("http://localhost:4000/user/create",{
        name:"dora",
        email:"dora@gmail.com",
        password:"1234567"
    });
    console.log(res.data);
}

createUser();