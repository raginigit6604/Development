import { Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './page/Home'
import About from './page/About';
import User from './page/User';
import Notfound from './page/Notfound';



const App = ()=> {
  return (
    <div>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:id" element={<User />} />
        <Route path = "*" element={<Notfound/> }/>
      </Routes>
    </div>
  );
}

export default App;
