import React from "react";
import MoviesRow from "./MovieRows/MovieRows";
import Banner from "./Banner/Banner";
import { requests } from "../../Api/axios";

function Movies({ setSearchTerm }) {
  return (
    <div >
      <Banner />

      <MoviesRow
        title={"Trending Movies"}
        handleAPI={requests.trendingMovies}
        setSearchTerm={setSearchTerm}
      />
      <MoviesRow
        title={"Popular Movies"}
        handleAPI={requests.popularMovies}
        setSearchTerm={setSearchTerm}
      />
      <MoviesRow
        setSearchTerm={setSearchTerm}
        title={"Top Rated Movies"}
        handleAPI={requests.topRatedMovies}
      />
      <MoviesRow
        setSearchTerm={setSearchTerm}
        title={"Comedy Movies"}
        handleAPI={requests.comedyMovies}
      />
      <MoviesRow
        setSearchTerm={setSearchTerm}
        title={"Action Movies"}
        handleAPI={requests.actionMovies}
      />
      <MoviesRow
        setSearchTerm={setSearchTerm}
        title={"Romantic Movies"}
        handleAPI={requests.romanticMovies}
      />
      <MoviesRow
        setSearchTerm={setSearchTerm}
        title={"Crime Movies"}
        handleAPI={requests.crimeMovies}
      />
      <MoviesRow
        setSearchTerm={setSearchTerm}
        title={"Horror Movies"}
        handleAPI={requests.horrorMovies}
      />
      <MoviesRow
        setSearchTerm={setSearchTerm}
        title={"Documentaries"}
        handleAPI={requests.documentaryMovies}
      />
            <MoviesRow
        setSearchTerm={setSearchTerm}
        title={"Adventure Movies"}
        handleAPI={requests.Adventuremovies}
      />      <MoviesRow
      setSearchTerm={setSearchTerm}
      title={"Animation Movies"}
      handleAPI={requests.AnimationMovies}
    />      <MoviesRow
    setSearchTerm={setSearchTerm}
    title={"Drama Movies"}
    handleAPI={requests.DramaMovies}
  />      <MoviesRow
  setSearchTerm={setSearchTerm}
  title={"Family Movies"}
  handleAPI={requests.FamilyMovies}
/>      <MoviesRow
        setSearchTerm={setSearchTerm}
        title={"Music Movies"}
        handleAPI={requests.MusicMovies}
      />      <MoviesRow
      setSearchTerm={setSearchTerm}
      title={"Mystery Movies"}
      handleAPI={requests.MysteryMovies}
    />      <MoviesRow
    setSearchTerm={setSearchTerm}
    title={"Thriller Movies"}
    handleAPI={requests.ThrillerMovies}
  />      <MoviesRow
  setSearchTerm={setSearchTerm}
  title={"War Movies"}
  handleAPI={requests.WarMovies}
/>      <MoviesRow
        setSearchTerm={setSearchTerm}
        title={"Western Movies"}
        handleAPI={requests.WesternMovies}
      />
    </div>
  );
}

export default Movies;
