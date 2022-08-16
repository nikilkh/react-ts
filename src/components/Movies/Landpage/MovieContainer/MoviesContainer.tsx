import { useContext } from "react";
import { MoviesContainerStyle, MovieStyle } from "./Movies/Landpage/LandPage.styled";
import { context, movieData } from "./context";
import MovieCard from "./MovieCard";
const IMG_URL = "https://image.tmdb.org/t/p/w500";


export default function MoviesContainer() {
  const a = useContext(context);
 
  return (
    <MoviesContainerStyle>
      {a?.showMovies ? (
        <>
          {a?.movies?.map((movie: movieData) => {
            return (
              <>
                <MovieStyle bg={IMG_URL + movie.poster_path}>
                  <MovieCard movie={movie}></MovieCard>
                </MovieStyle>
              </>
            );
          })}
        </>
      ) : (
        <h3>loading...</h3>
      )}
    </MoviesContainerStyle>
  );
}
