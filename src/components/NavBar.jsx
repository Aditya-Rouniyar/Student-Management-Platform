import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  const baseClass = "block py-2 px-4 rounded hover:bg-gray-200";
  const activeClass = "bg-gray-300";
  return (
    <nav className="w-48 bg-gray-100 p-4">
      <NavLink to="/students" className={({isActive}) => `${baseClass} ${isActive?activeClass:''}`}>Students</NavLink>
      <NavLink to="/chat"     className={({isActive}) => `${baseClass} ${isActive?activeClass:''}`}>Chat</NavLink>
    </nav>
  );
}

export default NavBar;
