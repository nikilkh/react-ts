import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../Button";
import { movieCardProps } from "./MovieCard.types";

export const MovieCard = (props: movieCardProps) => {
  const navigate = useNavigate();

  function handleBookNow() {
    navigate(`/book/${props.movie.id}/${props.movie.title}`, { state: props });
  }

  return (
    <>
      <h3>{props.movie.title}</h3>
      <Button onclick={handleBookNow}>Book Now</Button>
    </>
  );
};
