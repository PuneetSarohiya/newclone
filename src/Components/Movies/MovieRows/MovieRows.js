import React, { useState, useEffect } from "react";
import { instance, img_api } from "../../../Api/axios";
import "./MovieRows.css";
import { Link } from "react-router-dom";
import {
  animationTitle,
  transitionTitle,
  animationPosters,
  transitionPosters,
} from '../../animations/row';
import { useLocation } from "react-router-dom";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import Rating from "@material-ui/lab/Rating";
import TextTruncate from "react-text-truncate";
import numeral from "numeral";
// import { useHorizontalScroll } from "../useHorizontalScroll";

const MoviesRow = ({ title, handleAPI, setSearchTerm }) => {
  const [movies, setMovies] = useState([]);
  const { pathname } = useLocation();
  const base_url = 'https://image.tmdb.org/t/p/original/';

  // const scrollRef = useHorizontalScroll();

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await instance.get(handleAPI).catch((err) => {
        console.log("MovieRow Error", err.response);
      });

      // refinedMovies removes all the movie objects with broken image files
      // and slices the array to render 10 working movie objects
      const refinedMovies = response.data.results
        .filter((movie) => {
          return movie?.poster_path !== null || "" || undefined;
        })
        .slice(0, 10);

      setMovies(refinedMovies);
      return response;
    };

    fetchMovies();
  }, [handleAPI]);

  const getReleaseYear = (date) => {
    let year = new Date(date);
    return year.getFullYear(pathname);
  }
  
console.log(movies, "MOQDWJQPWOHDIQWGDQWDHQBWKJ")

  return (
    <React.Fragment>
      <div className="row">
        <h2 className="row__title">{title}</h2>
        {/* <div
          className="row__posters"
          // ref={scrollRef}
        >
          {movies &&
            movies.map((movie) => {
              return (
                <div
                  key={movie.id}
                  className="row__movie"
                  onClick={() => setSearchTerm("")}
                >
                  <Link to={`/movie/${movie.id}`}>
                    <img
                      src={img_api.poster + movie?.poster_path}
                      alt={movie.title}
                      className="row__poster"
                    />
                  </Link>
                </div>
              );
            })}
        </div> */}
            <div className="row__posters list__items" >
        {movies.map((movie) => (
                <div
                key={movie.id}
                className="list__item"
                onClick={() => setSearchTerm("")}
              >
                <Link to={`/movie/${movie.id}`}>
            <img
              loading="lazy"
              key={movie.id}
              className={`row__poster`}
              src={img_api.poster + movie?.poster_path}
              alt={movie.name}
            />
            <div className="list__itemInfo">
              <h5 className="list__itemTitle">
                {movie.name || movie.original_title}
                <span className="list__itemYear">
                  ({getReleaseYear(movie.release_date || movie.first_air_date)})
                </span>
              </h5>
              <TextTruncate
                line={2}
                element="p"
                containerClassName="list__itemOverview"
                truncateText="…"
                text={movie.tagline || movie.overview}
              />
              <div className="list__rating">
                <Rating
                  name="movie-rating"
                  className="movieRating"
                  value={movie.vote_average / 2 || 0}
                  precision={0.5}
                  icon={<StarRoundedIcon fontSize="inherit" readOnly />}
                />
                <small className="list__likes">
                  {numeral(movie.vote_average / 2).format("0.0")}
                </small>
              </div>
            </div>
            </Link>
          </div>
        ))}
      </div>
      </div>
    </React.Fragment>
  );
};

export default MoviesRow;

// <div>
// {movies &&
//   movies.map((movie) => {
//     return (
//       <div key={movie.id} onClick={() => setSearchTerm("")}>
//         <Link to={`/movie/${movie.id}`}>
//           <img
//             src={img_api.poster + movie?.poster_path}
//             alt={movie.title}
//           />
//         </Link>
//       </div>
//     );
//   })}
// </div>

// <React.Fragment>
// <div className="row">
//   <h2 className="row__title">{title}</h2>
//   <div className="row__posters">
//     {movies &&
//       movies.map((movie) => {
//         return (
//           <div
//             key={movie.id}
//             className="row__movie"
//             onClick={() => setSearchTerm("")}
//           >
//             <Link to={`/movie/${movie.id}`}>
//               <img
//                 src={img_api.poster + movie?.poster_path}
//                 alt={movie.title}
//                 className="row__poster"
//               />
//             </Link>
//           </div>
//         );
//       })}
//   </div>{" "}
// </div>
// </React.Fragment>