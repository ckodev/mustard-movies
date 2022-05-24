import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { API_KEY } from '../globals/Globals';
import SingleMovie from '../components/SingleMovie';
import isFav from '../utilities/isFav';




function PageSingleMovie() {

  

    const favs = useSelector((state) => state.favs.items);

    const { id } = useParams();
    const [movieData, setMovieData] = useState(false);
    const [movieCast, setMovieCast] = useState(false);
    
    

useEffect(()=>{

    const fetchMovie = async () => {

        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
        const data = await response.json();
        
        setMovieData(data);

    }
    fetchMovie();
},[])

useEffect(()=>{

    const fetchMovie = async () => {

        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
        const data = await response.json();
        
        setMovieCast(data);

    }
    fetchMovie();
},[])


  return (
    <section className='single-movie-container' >
        {movieData !== false && movieCast !== false && <SingleMovie movie={movieData} cast={movieCast} isFav={isFav(favs, null, id)} />}
        
    </section>
  )
}

export default PageSingleMovie