import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex gap-4">
      <NavLink to="/" className={({ isActive }) => isActive ? "font-bold underline" : ""}>
        Home
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? "font-bold underline" : ""}>
        About
      </NavLink>
      <NavLink to="/user/1" className={({ isActive }) => isActive ? "font-bold underline" : ""}>
        User
      </NavLink>
    </nav>
  );
}

export default Navbar;
