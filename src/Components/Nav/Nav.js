import React, { useState, useEffect } from "react";
import "./Nav.css";
import { requests, instance } from "../../Api/axios";
import { useHistory, withRouter } from "react-router-dom";
import netflixLogo from '../images/netflix.png';
import netflixAvatar from '../images/A5.png';

function Nav({ searchTerm, setSearchTerm, searchpage }) {
  // SCROLLING SECTION
  const [movies, setMovies] = useState([]);

  //Black bar appears on scroll, disappears when on top
  const [navbar, setNavbar] = useState(false);

  //Scrolling useEffect
  useEffect(() => {
    //listen to scroll, if more than 80px, nav__active class is added
    const scroll = window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    });
    //removes scroll listener when not scrolling
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  // MOVIE SEARCH SECTION
  let history = useHistory();

  //funtion that calls API
  const getMovies = async (apiSearchTerm) => {
    console.log(apiSearchTerm);
    // default apiSearchTerm is 'e.target.value'.
    // if length is 0, the input is empty and we get back to main page
    //else we go to '/search' page of our React website
    if (apiSearchTerm.length <= 1) {
      history.push("/");
      return;
    }

    const response = await instance
      .get(`${requests.searchMovies}?query=${apiSearchTerm}`)
      .catch((err) => {
        console.log("Search Error", err.response);
      });
    setMovies(response.data.results);
    history.push({
      pathname: "/search",
      movieRows: movies,
      searchInput: apiSearchTerm,
    });
  };

  //Renders movies based on what's being typed
  const handleChange = async (e) => {
    await setSearchTerm(e.target.value);

    await getMovies(searchTerm);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    setSearchTerm("");
  };

  return (
    <nav>
      <div className={`nav ${navbar && "nav__active"}`} style={{width:'90%'}}>
        <div className="nav__icon" onClick={() => setSearchTerm("")} style={{display:'flex',gap:'40px'}}>
        <img
        onClick={() => history.push('/')}
        className='nav_logo'
        src={netflixLogo}
        alt='Logo'
      />
        <img
        onClick={() => history.push('/profile')}
        className='nav_avatar'
        src={netflixAvatar}
        alt='Profile'
      />
        </div>
        {!searchpage && (
  <form onSubmit={handleOnSubmit}>
    <input
      aria-label="search"
      type="text"
      name="search"
      className="nav__input"
      placeholder="Search movie"
      value={searchTerm}
      onChange={handleChange}
      autoComplete="off"
    />
  </form>
)}


      </div>
    </nav>
  );
}

export default withRouter(Nav);
