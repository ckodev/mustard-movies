import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav({showHideNav}) {

  function closeNav(e) {

    if (window.innerWidth < 600) {
      showHideNav()
    }
    showHideNav()

    e.target.blur();
    
  }

  return (
    <nav className="nav-menu" onClick={closeNav}>
        <ul>
            <li><NavLink to="/sort/now_playing">Home</NavLink></li>
            <li><NavLink to="/PageFavourites">Favourites</NavLink></li>
            <li><NavLink to="/PageAbout">Contact</NavLink></li>
        </ul>
    </nav>
  )
}

export default Nav