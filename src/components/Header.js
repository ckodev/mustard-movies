import React from 'react'
import { useEffect } from 'react';
import Nav from './Nav';
import {NavLink} from 'react-router-dom';
import SearchBar from './SearchBar';
import {ReactComponent as ReactLogo} from '../images/mustard-logo.svg'


function Header() {
  //console.log(wordEntered);
  function showHideNav() {
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
  function closeNav() {
    if (document.body.classList.contains('show')){
        document.body.classList.remove('show');
        document.body.classList.add('hide');
       
    }
  }
 
  useEffect(()=>{
    let mq = window.matchMedia('(min-width: 600px)');
    mq.addEventListener('change', isDesktop);
    function isDesktop(e) {
      if (e.matches) {
        document.body.classList.remove('show');
        document.body.classList.add('hide');
      } else {
        document.body.classList.remove('show');
        document.body.classList.add('hide');
      }
    }
  },[])
 
  return (
    <header>
        <div className="header-box">
          <NavLink className='header-logo' to="/sort/now_playing"><h1>Mustard Movies</h1></NavLink>
              <div className="desktop-show-search">
                <SearchBar placeholder='search' />
              </div>
              <button className="btn-main-nav"
                  onMouseDown={(e) => { e.preventDefault(); }}
                  onClick={showHideNav}>
                  <span className="hamburger-icon">
                      <span className="line"></span>
                      <span className="line"></span>
                      <span className="line"></span>
                  </span>
                  <span className="sr-only">Menu</span>
              </button>
        </div>
            <div className="mobile-show-search">
              <SearchBar placeholder='search' />
            </div> 
          <Nav showHideNav={closeNav}/>
    </header>
  )
}
Header.defaultProps = {
    title: 'Movie App'
}
export default Header