import React from 'react'
import {useNavigate,useParams} from "react-router";

const About = () => {
    const navigate = useNavigate(); // here i initialize
    const params = useParams();
    console.log(params,'---params--');
  return (
    <div>
        <p>About pgae</p>
        {/* //here i use useNavigate function */}
         <button onClick={()=>navigate("/")} className='border-4 border-blue-500 bg-blue-200 p-2 m-2 text-1.5xl rounded-lg '>Home</button> 
    </div>
  )
}

export default About;