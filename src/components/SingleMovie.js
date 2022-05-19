// import {Link} from 'react-router-dom';
import noPoster from '../images/no-movie-poster.jpg';
import FavButton from './FavButton';
import { useDispatch } from "react-redux";
import { favourite, unFavourite } from "../features/favSlice";
import { format } from 'date-fns';


function SingleMovie({movie, isFav}) {


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
    
        <>
        <div className="single-movie-backdrop" 
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`
            }}>

        </div>
        <div className="single-movie-poster">
            {movie.poster_path === null ?
                <img src={noPoster} alt="no poster available"/> :
                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title}/> }
        </div>

        <div className="single-movie-info">
            <h2>{movie.title}</h2>
            <p className="release-date">{formattedDate}</p>
            <p className='overview'>{movie.overview}</p>
        </div>

        <div className='fav-btn'>
                {isFav ? 
                    <FavButton movie={movie} remove={true} handleFavClick={handleFavClick} /> : 
                    <FavButton movie={movie} handleFavClick={handleFavClick} />
                }
        </div>
        </> 
    
  )
}

export default SingleMovie