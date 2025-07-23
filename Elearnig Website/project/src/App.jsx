// import React from 'react';
// import {Routes,Route} from 'react-router';
// import Home from "./pages/Home"
// import About from "./pages/About"
// import Contact from "./pages/Contact"
// import Notfound from "./pages/Notfound"
// import Navbar from "./components/Navbar"

// const App =()=>{
//   return (
//     <div>
//       <Navbar/>
//        <Routes>
//           <Route path = "/" element={<Home />}/>
//           <Route path="/about/:id" element ={<About />}/>
//           <Route path = "/contact" element = {<Contact />}/>
//           <Route path = "*" element={<Notfound/> }/>
//        </Routes>
//     </div>
//   )
// }

// export default App;

import React,{useState} from 'react'
import {Routes,Route, Router} from 'react-router';
import { ThemeProvider, useTheme } from './context/Usercontext'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Notfound from './pages/Notfound'
import { UsethemeusingZustand } from './store/UsethemeusingZustand';
const App = () => {
  // const [darkTheme,setTheme] = React.useState(true);
  // const setDarkTheme = ()=>{
  //   setTheme((prev)=>!prev);
  // }
    const {darkTheme} = UsethemeusingZustand();

  return (
    <div>
      {/* <ThemeProvider value={{darkTheme,setDarkTheme}}> */}
        <div className={`h-screen ${darkTheme ? "bg-white" : "bg-yellow-200"}`}>
        <Routes>
           <Route path = "/" element={<Home />}/>
           <Route path="/about/:id" element ={<About />}/>
            <Route path = "/contact" element = {<Contact />}/>
            <Route path = "*" element={<Notfound/> }/>
        </Routes>
        </div>
      {/* </ThemeProvider> */}
    </div>
    
  )
}

export default App