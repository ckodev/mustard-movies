import React from 'react'
import {ReactComponent as ReactLogo} from '../images/mustard-logo.svg'
import {NavLink} from 'react-router-dom';

function PageAbout() {
  return (
    <>
    <div className='about-page'>
        <h1>Welcome</h1>
        <p>When it comes to movies, we like to put a little mustard on it!</p>
          <p>Join our community to discuss and share your favourite movies.  We have all the latest and upcoming releases as well as trailers and detailed information about each film.  Be nice! have fun!</p>
       
          <p>Please reach out if you have questions or concerns.</p> 
      
          <p>- M.M. </p> 
    </div>
    <NavLink to="/sort/now_playing">
    <div className='logo'>
    <ReactLogo/>
    </div>
    </NavLink>
    </>
  )
}

export default PageAbout