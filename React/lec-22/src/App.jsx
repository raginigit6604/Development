import React, { useState } from 'react'
import useApi from './hooks/useApi.jsx'
import { toast } from 'react-toastify';
import Loader from './component/loader.jsx';
import UserDetails from './component/UserDetails.jsx';
import { useUser } from './store/useUser.js'; //step-5
const App = ()=>{
    const{data,error,loading} = useApi('https://dummyjson.com/users/1');
     const [userid,setuserid] = useState(1);
     const {user} = useUser(); //step-6
     console.log(user,"Global State manmagement through Zustand")
    if(loading) return <Loader/>
    if(error) return<p>`An error occured`</p>

    console.log(data,error,loading,'______________Data__________');
    

    const handlenextuser = ()=>{
      setuserid((prev)=>prev+1);
      toast.success("next button clicked",{
        position: "top-center",
        autoClose:'8000' // it is used to close popup in 30sec automatically
      }); // info is used for blue color
    }

    return (
      <div className='border border-red-600'>Hello World
        <button onClick={handlenextuser}>Next user</button>
        {/* here user={data} is props  app is parent and userdetails is child1 and usercontact is child 2 */ }
        <UserDetails user ={data}/> 
      </div>
    )
}

export default App;