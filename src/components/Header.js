import React from 'react'
import { useState, useEffect } from 'react';
import Nav from './Nav';

function Header() {

  // const [navOpen, setNavOpen]  = useState(false);

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
        <h1>Mustard Movies</h1>

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
          <Nav showHideNav={closeNav}/>
    </header>
  )
}

Header.defaultProps = {
    title: 'Movie App'
}

export default Header


