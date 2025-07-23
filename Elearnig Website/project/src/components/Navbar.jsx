import React from 'react'
import {Link,NavLink} from "react-router"

const Navbar = () =>{
    return (
        <div>
            <h1>Navlink</h1>
            <NavLink to="/" className={({isActive})=> isActive ? "bg-green-600 text-4xl" : ""}>Home</NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ?"bg-yellow-600": ""}>About</NavLink>
            <NavLink to="/contact" className={({isActive})=>isActive?"bg-blue-600" : ""}>Contact</NavLink>
          <h1>Link</h1>
           <Link to="/">Home</Link>
           <Link to="/about">About</Link>
           <Link to="/contact">Contact</Link>

        </div>
    )
}
export default Navbar;
