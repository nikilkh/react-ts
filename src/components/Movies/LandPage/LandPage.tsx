import { useContext, useEffect } from "react";
import { context } from "../../context";
import MoviesContainer from "./MovieContainer/MoviesContainer";
import NoResult from "./NoResult/NoResult";
import {
  HeaderStyle,
  LandPageStyle,
  SearchBoxStyle,
  SearchIconButtonStyle,
} from "./LandPage.styled";
import searchIcon from "../../SVGs/searchIcon.svg";

export const LandPage = () => {
  const states = useContext(context);
  const API_KEY = process.env.REACT_APP_API_KEY;
  const API_URL = process.env.REACT_APP_API_URL;
  const BASE_URL = "https://api.themoviedb.org/3";
  const SEARCH_URL = BASE_URL + "/search/movie?" + API_KEY + "&query=";

  async function getMovie(url: string) {
    states?.setNoResult(false);
    states?.setShowMovies(false);

    try {
      const res = await fetch(url);
      const data = await res.json();
      const result = data.results;
      if (result.length === 0) {
        states?.setNoResult(true);
      } else {
        states?.setMovies(result);
        states?.setShowMovies(true);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleSearchClick(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();
    if (states?.input?.length === 0) {
      getMovie(API_URL);
    } else {
      getMovie(SEARCH_URL + states?.input);
    }
  }

  useEffect(() => {
    getMovie(API_URL);
  }, []);
  return (
    <LandPageStyle>
      <HeaderStyle>
        <h1>Movie List</h1>
      </HeaderStyle>
      <SearchBoxStyle>
        <input
          placeholder="search your movie here"
          value={states?.input}
          onChange={(e) => {
            states?.setInput(e.target.value);
          }}
        ></input>
        <SearchIconButtonStyle
          onClick={(e) => {
            handleSearchClick(e);
          }}
        >
          <img src={searchIcon} alt="search icon"></img>
        </SearchIconButtonStyle>
      </SearchBoxStyle>
      {states?.noResult ? <NoResult /> : <MoviesContainer />}
    </LandPageStyle>
  );
};
