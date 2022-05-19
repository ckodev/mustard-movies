import {Link} from 'react-router-dom';
import noPoster from '../images/no-movie-poster.jpg';
import FavButton from './FavButton';
import { useDispatch } from "react-redux";
import { favourite, unFavourite } from "../features/favSlice";
import { format } from 'date-fns';




function MovieCard({movie, isFav}) {

  const dispatch = useDispatch();

  function handleFavClick(addToFav, obj){
    if(addToFav === true){
        dispatch(favourite(obj));
    }else{
        dispatch(unFavourite(obj));
    }   
}

const date = new Date(movie.release_date);
const formattedDate = format(date, "MMMM do, yyyy");




  return (
    <div className='movie-card'>

        <div className="movie-poster">
            {movie.poster_path === null ?
                <img src={noPoster} alt="no poster available"/> :
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}/> }
        </div>

        <div className='fav-btn'>
                {isFav ? 
                    <FavButton movie={movie} remove={true} handleFavClick={handleFavClick} /> : 
                    <FavButton movie={movie} handleFavClick={handleFavClick} />
                }
        </div>

        <div className="rating-release-container">
            <p className='rating-percent'>{`${movie.vote_average * 10}%`}</p>
            <h2 className='movie-title'>{movie.title}</h2>
            <p className='release-date'>{formattedDate}</p>
        </div>

        <div className="movie-info">
            {/* <h3><span>{movie.title}</span></h3> */}
            <Link to={`/movie/${movie.id}`}>More Info</Link>
        </div>


       

       

    </div>
  )
}

export default MovieCard