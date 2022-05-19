
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { appTitle } from '../globals/Globals';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';





function PageFavourites() {

  const favs = useSelector((state => state.favs.items))

  useEffect(() => {
		document.title = `${appTitle} - Favs`;
	}, []);

  return (
    <main>
    <section className='home-page'>
            <h2 className='favourites-heading'>Favourite Movies</h2>
            {favs.length < 1 ? <p className='no-favs-p'>There's nothing here! head back to the <Link to="/">home</Link> page and add some favourite movies!.</p> : 
                <div className="movies-container">
                    {favs.map((movie, i) => {
                        return <MovieCard key={i} 
                                       movie={movie}
                                       isFav={true} />
                    })}
               </div>}
        </section>
  </main>
  )
}

export default PageFavourites