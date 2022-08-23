import { useLocation } from "react-router-dom";
import {
  CloseButtonStyle,
  ConfirmModalStyle,
  ImageAndPrice,
  ModalCloseStyle,
  ModalFlexMainStyle,
  ModalHeadingStyle,
  ModalImageStyle,
  PriceDetailsStyle,
} from "../BookingPageStyle/BookingPage.style";
import { props, stateType } from "./ConfirmBooking.types";

export const ConfirmBooking = (props: props) => {
  const IMG_URL = "https://image.tmdb.org/t/p/w500";
  const location = useLocation();
  const state = location.state as stateType;

  return (
    <ConfirmModalStyle>
      <ModalCloseStyle>
        <CloseButtonStyle onClick={props.closeModal}>X</CloseButtonStyle>
      </ModalCloseStyle>
      <ModalFlexMainStyle>
        <ModalHeadingStyle>
          <h1>Thank you for booking</h1>
        </ModalHeadingStyle>
        <ModalHeadingStyle>
          <h5>Order summary</h5>
        </ModalHeadingStyle>
        <ImageAndPrice>
          <ModalImageStyle>
            <img
              src={IMG_URL + state.movie.poster_path}
              alt={`${state.movie.title}`}
            ></img>
          </ModalImageStyle>

          <PriceDetailsStyle>
            <h3>Seats:</h3>
            <div>
              {props.selectedSeats.length <= 3 ? (
                <h1>{props.selectedSeats.join(",")}</h1>
              ) : (
                <h2>{props.selectedSeats.join(",")}</h2>
              )}
            </div>

            <div>
              <h5>
                {props.selectedSeats.length} * {250}:
              </h5>
              <h5>{props.selectedSeats.length * 250}</h5>
            </div>

            <div>
              <p>SGST(12%):</p>
              <p>{(12 * (props.selectedSeats.length * 250)) / 100}</p>
            </div>

            <div>
              <p>CGST(12%):</p>
              <p>{(12 * (props.selectedSeats.length * 250)) / 100}</p>
            </div>

            <div>
              <h5>Total:</h5>
              <h5>
                {props.selectedSeats.length * 250 +
                  ((12 * (props.selectedSeats.length * 250)) / 100) * 2}
              </h5>
            </div>
          </PriceDetailsStyle>
        </ImageAndPrice>
      </ModalFlexMainStyle>
    </ConfirmModalStyle>
  );
};
