
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { appTitle } from '../globals/Globals';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import {ReactComponent as ReactLogo} from '../images/mustard-logo.svg'
import {NavLink} from 'react-router-dom';





function PageFavourites() {

  const favs = useSelector((state => state.favs.items))

  useEffect(() => {
		document.title = `${appTitle} - Favs`;
	}, []);

  return (
    <main>

  {favs.length < 1 ?  

  <section className='home-page favs-page'>
    <h2 className='favourites-heading'>Favourite Movies</h2>
      <p className='no-favs-p'>There's nothing here! Head back to the <Link className="home-link" to="/">home</Link> page and add some favourite movies!.
      </p>
  </section> 

  :

  <section className='home-page'>
    <h2 className='favourites-heading'>Favourite Movies</h2>
      <div className="movies-container">

        {favs.map((movie, i) => {
            return <MovieCard key={i} 
                            movie={movie}
                            isFav={true} />
        })}
      </div>
  </section>
  }

    <NavLink to="/sort/now_playing">
      <div className='logo'>
        <ReactLogo/>
      </div>
    </NavLink>
</main>
  )
}

export default PageFavourites