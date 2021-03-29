import React from "react";
import { Link } from 'react-router-dom'
import { Menu, Segment } from "semantic-ui-react";

function Navbar() {
  return (
    <>
    <nav className="navbar">
    <div className="navbar-container">
      <ul>
        <li className='nav-item'>
        <Link to='/home' className='nav-links'>
                       Home
          </Link>
        </li>
        <li className='nav-item'>
        <Link to='/profile' className='nav-links'>
                       Your Profile
          </Link>
        </li>
        <li className='nav-item'>
        <Link to='/favorites' className='nav-links'>
                       Favorites
          </Link>
        </li>
      </ul>
    </div>
    </nav>
    </>
  );
}

export default Navbar;
