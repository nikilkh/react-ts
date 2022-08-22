import { useContext } from "react";
import { context, movieData } from "../../Context/context";
import { MoviesContainerStyle, MovieStyle } from "../LandPage/LandPage.styled";
import { MovieCard } from "../MovieCard/index";
const IMG_URL = "https://image.tmdb.org/t/p/w500";

export const MoviesContainer = () => {
  const states = useContext(context);

  return (
    <MoviesContainerStyle>
      {states?.showMovies ? (
        <>
          {states?.movies?.map((movie: movieData) => {
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
