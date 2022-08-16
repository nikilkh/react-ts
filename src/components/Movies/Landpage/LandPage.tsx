
  import { useContext, useEffect } from "react";
  import { context, obj } from "../../context";
  import MoviesContainer from "../../MoviesContainer";
  import { useNavigate } from "react-router-dom";
import { HeaderStyle, LandPageStyle, SearchBoxStyle } from "../styles/LandPage.styled";
import NoResult from "./NoResult";
  

  export const LandPage = () => {
    let navigate = useNavigate();
const a = useContext(context);  
    const API_KEY = "api_key=0decbb49ed9b3d0c6017d7721a14c106";
    const BASE_URL = "https://api.themoviedb.org/3";
    const API_URL =
      BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
    const searchURL = BASE_URL + "/search/movie?" + API_KEY + "&query=";
  
    async function getMovie(url: string) {
      a?.setNoResult(false);
      a?.setShowMovies(false);
      
      const res = await fetch(url);
      const data = await res.json();
      console.log(data)
      const result = data.results;
      if (result.length === 0) {
        a?.setNoResult(true);
      } else {
        a?.setmovies(result);
        a?.setShowMovies(true);
        navigate(`/${a?.input}`);
      }
    }
  
    function handleSearchClick(e:React.MouseEvent<HTMLButtonElement, MouseEvent>) {
      e.preventDefault();
      if (a?.input?.length === 0) {
        getMovie(API_URL);
      } else {
        getMovie(searchURL + a?.input);
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
            onChange={(e) => {
              a?.setinput(e.target.value);
            }}
          ></input>
          <button
            onClick={(e) => {
              handleSearchClick(e);
            }}
          >
            Search
          </button>
            </SearchBoxStyle>
            {a?.noResult ? (<NoResult></NoResult>) : (<MoviesContainer></MoviesContainer>)}
        </LandPageStyle>

        
    );
  };
  