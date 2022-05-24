import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import noPoster from '../images/no-movie-poster.jpg';


function SearchBar({placeholder}) {
    const [filteredData, setFilteredData] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    function handleFilter(event) {
        const searchWord = event.target.value;
        setSearchInput(searchWord);
    }

    console.log(filteredData)
    

    

    const [movieData, setMovieData] = useState(false);
    console.log();

useEffect(()=>{
    const fetchMovie = async () => {
  
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=cb69fcedf68e151565f2200910579334&language=en-US&query=${searchInput}&page=1&include_adult=false`)
        const data = await response.json();
        
        setMovieData(data);
        if (searchInput == "") {
            clearInput();
        }
        
  
    }
    fetchMovie();
  },[searchInput])

useEffect(()=>{
    if(typeof(movieData.results) !== "undefined"){
        const newFilter = movieData.results.filter((value) => {
            return value.title.toLowerCase().includes(searchInput.toLowerCase());
        })
        if (searchInput == "") {
            setFilteredData([]);
            clearInput();
        } else {
            setFilteredData(newFilter)    
        } 
        console.log(newFilter);
    }
}, [movieData])

function clearInput() {
    setFilteredData([]);
    setSearchInput("");
}

function clearInputNav() {
    setFilteredData([]);
    setSearchInput("");
    this.forceUpdate();
}
    
//  console.log(movieData)
 console.log(searchInput)

  return (
    <div className='search'>
        <div className="search-inputs">
            <input type="text" placeholder={placeholder} value={searchInput} onChange={handleFilter}/>
            <div className="search-icon">
                {searchInput == "" ? <SearchIcon /> : <CloseIcon onClick={clearInput} />}
                
            </div>
        </div>
        {filteredData.length != 0 && (
        <div className="data-result">
            {filteredData.slice(0,15).map((value) => {
                return <NavLink className='data-item' onClick={clearInputNav} key={value.title} to={`/movie/${value.id}`}>
                        {value.poster_path === null ?
                        <img src={noPoster} alt="no poster available"/> :
                        <img src={`https://image.tmdb.org/t/p/w500/${value.poster_path}`} alt={value.title}/> }
                        <p>{value.title}</p> 
                    </NavLink>
            })}
        </div>
        )}
    </div>
  )
}
export default SearchBar