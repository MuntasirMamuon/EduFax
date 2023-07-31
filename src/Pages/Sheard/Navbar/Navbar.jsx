import React from 'react';
import Logo from "../../../assets/images/logo.png"
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
            <div className="navbar fixed z-10 bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link>Item 1</Link></li>
        <li>
          <Link>Parent</Link>
          <ul className="p-2">
            <li><Link>Submenu 1</Link></li>
            <li><Link>Submenu 2</Link></li>
          </ul>
        </li>
        <li><Link>Item 3</Link></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">
    <img className='w-24' src={Logo} alt="" />
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link>Home</Link></li>
      <li><Link>About Us</Link></li>
      <li><Link>Courses</Link></li>
      <li><Link>Event</Link></li>
      <li><Link>Blog</Link></li>
      <li tabIndex={0}>
        <details>
          <summary>Parent</summary>
          <ul className="p-2 w-60">
            <li><Link>Become An Instructor</Link></li>
            <li><Link>Blog Details</Link></li>
            <li><Link>Courses Details</Link></li>
            <li><Link>Event Details</Link></li>
            <li><Link>Instructor</Link></li>
          </ul>
        </details>
      </li>
      <li><Link>Contact</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <Link to="signUp" className="btn">Sign Up</Link>
  </div>
</div>
        </div>
    );
};

export default Navbar;