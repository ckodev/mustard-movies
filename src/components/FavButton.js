import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faMinus, } from '@fortawesome/free-solid-svg-icons';


function FavButton({movie, remove, handleFavClick}) {

  function handleAddFav() {
    handleFavClick(true, movie)
  }
  function handleRemoveFav() {
    handleFavClick(false, movie)
  }

  return (
    <>
      {remove === false ? 
      
            <button onClick={handleAddFav} className="fav-button add-fav">
            <FontAwesomeIcon className='icon add-fav-bg' icon={faHeart} />Add To Favs</button> : 

            <button onClick={handleRemoveFav} className="fav-button remove-fav" >
            <FontAwesomeIcon className='icon' icon={faMinus} />
            <FontAwesomeIcon className='favourited' icon={faHeart} />Remove</button>}
    </>
  );
}

FavButton.defaultProps = {
  remove: false
}

export default FavButton;
