import React from 'react';

/* Add NavLink to importer */
import { NavLink } from 'react-router-dom';

  /* Add basic styling for NavLinks */
  const link = {
    width: '100px',
    height: '80px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white',
  }

  /* add the navbar component */
  const Navbar = () =>
    <div className='navbar'>
      <NavLink
        to="/"
        /* set exact so it knows to only set activeStyle when route is deeply equal to link */
        exact
        /* add styling to Navlink */
        style={link}
        /* add prop for activeStyle */
        activeStyle={{
          background: 'blue'
        }}
      >Home</NavLink>
      <NavLink
      to="/myarea"
      exact
      style={link}
      activeStyle={{
        background: 'blue'
      }}>My Area</NavLink>
      <NavLink
        to="/forecast"
        exact
        style={link}
        activeStyle={{
          background: 'blue'
        }}
      >Forecast</NavLink>
    </div>;


export default Navbar;
