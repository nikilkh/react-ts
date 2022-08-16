import { useNavigate } from "react-router-dom";
import { movieData } from "../../../context";
import { BookNowButtonStyle } from "../LandPage.styled";

type props = {
  movie: movieData;
};
export default function MovieCard(props: props) {
  let navigate = useNavigate();

  function handleBookNow() {
    navigate(`/book/${props.movie.id}/${props.movie.title}`, { state: props });
  }

  return (
    <>
      <h3>{props.movie.title}</h3>
      <BookNowButtonStyle onClick={handleBookNow}>Book Now</BookNowButtonStyle>
    </>
  );
}
