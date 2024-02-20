import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import "./Header.css";
import { useState } from 'react';

export function Header(){
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{fontFamily:'GraublauWeb',fontWeight:'bold'}}>
      <Link to="/" className="flex items-center">
       <img src={Logo} className="mr-3 h-12" alt="Logo" />
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/aboutus">About</NavLink>
        </li>
        <li>
          <NavLink to="/contactus">Register</NavLink>
        </li>
      </ul>
    </nav>
  );
};
