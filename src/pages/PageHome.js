import Movies from "../components/Movies";
import { API_KEY } from "../globals/Globals";
import { useEffect, useState } from "react";
import NavSort from "../components/NavSort";

function PageHome({ sort }) {
  const [moviesData, setMoviesData] = useState(false);
  const [error, setError] = useState(false);

  const errorMessage = "something went wrong, please try again.";

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${sort}?api_key=${API_KEY}&language=en-US&page=1`
      ).catch((_) => {
        moviesData !== false && setMoviesData(false);
        setError(errorMessage);
      });
      const data = await res.json();

      if (data.success === false) {
        moviesData !== false && setMoviesData(false);
        error !== false && setError(false);
        setError(errorMessage);
      } else {
        error !== false && setError(false);

        // const first12Movies = data.results.splice(0, 12);
        setMoviesData(data.results);
    
      }
    };

    fetchMovies();
  }, [sort]);

  return (
    <section className="home-page">
      <NavSort />
      <div className="movies-container-container">
        {error !== false && <p className="api-error">{error}</p>}
        {moviesData !== false && <Movies moviesData={moviesData} />}
      </div>
    </section>
  );
}

export default PageHome;
