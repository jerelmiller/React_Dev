import React from 'react';
import { Link } from 'react-router-dom';
import { MdFingerprint } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to='/' className="navbar-log">
            <MdFingerprint className='navbar-icon' />
                      LAVISH
                  </Link>
          <div className="menu-icon">

          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar
