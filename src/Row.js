import React,{useEffect, useState} from 'react'
import movieTrailer from 'movie-trailer'
import YouTube from 'react-youtube';
import axios from './axios';
import './Row.css' ;
 const  base_url="https://image.tmdb.org/t/p/original/"

function Row({title, fetchUrl, isLargeRow}) {
  

    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    useEffect(() => {
      async function fetchData() {
        const request = await axios.get(fetchUrl);
        console.log(request);
        console.log(request.data.results)
        setMovies(request.data.results);
        return request;
      }
      fetchData();
    }, [fetchUrl]);
 console.log(movies)

 const opts = {
    height: "390",
    Width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.original_name || movie?.title || "")
        .then((url) => {
          const urlparams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlparams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            onClick={() => handleClick(movie)}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      <div style={{ padding: "40px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
  
}

export default Row