import { useContext } from "react";
import { context, movieData } from "../../../context";
import { MoviesContainerStyle, MovieStyle } from "../LandPage.styled";
import MovieCard from "./MovieCard";
const IMG_URL = "https://image.tmdb.org/t/p/w500";

export default function MoviesContainer() {
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
