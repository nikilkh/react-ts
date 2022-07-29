import { useNavigate } from "react-router-dom";
import { movieData } from "./context";

type props = {
  movie: movieData
}
export default function MovieCard(props: props) {
    let navigate = useNavigate();

    function handleBookNow() {
navigate("/bookingpage", {state: props})
    }

  return (
    <>
      <h3>{props.movie.title}</h3>
      <button onClick={handleBookNow}>Book Now</button>
    </>
  );
}
