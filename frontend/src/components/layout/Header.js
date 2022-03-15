import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Header.css";
import AuthenticatedNavbar from "./Navbar/AuthenticatedNavbar";
import NotAuthenticatedNavbar from "./Navbar/NotAuthenticatedNavbar";

const Header = () => {
  const { user } = useSelector((state) => state.auth);

  console.log(user);

  return (
    <header className='header'>
      <div className='nav-left'>
        <Link to='/' className='logo'>
          Logo
        </Link>
        <Link to='/'>Explore Work</Link>
        <Link to='/'>Search Talent</Link>
      </div>
      <div className='nav-right'>
        {user ? <AuthenticatedNavbar /> : <NotAuthenticatedNavbar />}
      </div>
    </header>
  );
};

export default Header;
