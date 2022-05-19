
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm, faFire, faList, faStar, faTheaterMasks } from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react';


function NavSort() {



function showHideNav() {
    // setNavOpen(!navOpen)
    if(document.body.classList.contains('hide')){
    document.body.classList.remove('hide');
    document.body.classList.add('show');
    }else{
    document.body.classList.remove('show');
    document.body.classList.add('hide');
    }

    window.scrollTo({
        top: 0, 
        behavior: 'smooth'
        /* you can also use 'auto' behaviour
           in place of 'smooth' */
      });
}





  return (
    <nav  className='nav-sort'>
        <ul>
             <li>
                <NavLink to="/sort/now_playing" >
                   {window.location.pathname === "/sort/now_playing" || 
                    window.location.pathname === "/" ? <div className='li-container highlight'>
                        <FontAwesomeIcon className='icon' icon={faTheaterMasks}  />
                        <p className='now-playing'>Now Playing</p>
                    </div> :
                    <div className='li-container'>
                        <FontAwesomeIcon className='icon' icon={faTheaterMasks}  />
                        <p className='now-playing'>Now Playing</p>
                    </div>}
                </NavLink>
            </li>
            <li>
                <NavLink to="/sort/popular" >
                   {window.location.pathname !== "/sort/popular" ?  <div className='li-container'>
                        <FontAwesomeIcon className='icon ' icon={faFire}  />
                        <p className='popular'>Popular</p>
                    </div> :
                    <div className='li-container highlight'>
                        <FontAwesomeIcon className='icon' icon={faFire}  />
                        <p className='popular'>Popular</p>
                    </div> }
                </NavLink>

            </li>
            <li>
                <NavLink to="/sort/top_rated" >
                    {window.location.pathname !== "/sort/top_rated" ? <div className='li-container'>
                        <FontAwesomeIcon className='icon' icon={faStar} />
                        <p className='top-rated'>Top Rated</p>
                    </div> : <div className='li-container highlight'>
                        <FontAwesomeIcon className='icon' icon={faStar} />
                        <p className='top-rated'>Top Rated</p>
                    </div>}
                </NavLink>
            </li>
            
            <li>
                <NavLink  to="/sort/upcoming" >
                   {window.location.pathname !== "/sort/upcoming" ?  <div className='li-container'>
                        <FontAwesomeIcon className='icon' icon={faFilm} />
                        <p className='upcoming'>Upcoming</p>
                    </div> :
                    <div className='li-container highlight'>
                        <FontAwesomeIcon className='icon' icon={faFilm} />
                        <p className='upcoming'>Upcoming</p>
                    </div>}
                </NavLink>
            </li>
            <li className='menu-hide'>
                <div className='li-container' onClick={showHideNav}>
                    <FontAwesomeIcon className='icon' icon={faList} />
                    <p>Menu</p>
                </div>
            </li>
        </ul>
    </nav>
  )
}

export default NavSort