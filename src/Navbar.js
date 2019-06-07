import React from 'react';

/* Add NavLink to importer */
import { NavLink } from 'react-router-dom';

  /* Add basic styling for NavLinks */
  const link = {
    width: '100px',
    height: '80px',
    padding: '12px',
    margin: '0 6px 6px',
    background: '#f16051',
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
          background: '#f16051'
        }}
      >Weather Now</NavLink>
      <NavLink
        to="/forecast"
        exact
        style={link}
        activeStyle={{
          background: '#f16051'
        }}
      >Forecast 24h</NavLink>
    </div>;


export default Navbar;
