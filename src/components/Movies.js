import MovieCard from './MovieCard';
import {useSelector} from 'react-redux';
import isFav from '../utilities/isFav';

function Movies({moviesData}) {


  const favs = useSelector((state) => state.favs.items);


  return (
    <div className="movies-container">

       {moviesData.map(movie => <MovieCard key={movie.id} movie={movie} isFav={isFav(favs, null, movie.id)} />)}

    </div>
  )
}

export default Movies