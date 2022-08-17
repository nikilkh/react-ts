import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import screen from "../SVGs/screen.svg";
import whiteSeat from "../SVGs/whiteSeat.svg";
import greySeat from "../SVGs/greySeat.svg";
import blueSeat from "../SVGs/blueSeat.svg";

import { ConfirmBooking } from "./ConfirmBooking";
import {
  AllSeatsStyle,
  BookingPageFlex,
  BookingPageStyle,
  LetterSeatStyle,
  RowSeatStyle,
  ScreenStyle,
  SeatNumberStyle,
  SeatStyle,
} from "./BookingPage.style";
import { GlobalStyle } from "../../styles/Global.styled";
import { Button } from "../Button/Button";
type movie = {
  id: number;
};
interface stateType {
  movie: movie;
}

type BookingProps = {
  children: React.ReactNode;
};

export default function BookingPage(props: BookingProps) {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [confirmedSeats, setConfirmedSeats] = useState<string[]>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [bookingHomeVisible, setBookingHomeVisible] = useState<boolean>(true);
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const seats = {
    row: ["A", "B", "C", "D"],
    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  };

  let location = useLocation();
  const state = location.state as stateType;

  function handleSeatClick(id: string) {
    if (selectedSeats?.includes(id)) {
      let newSelectedSeats = selectedSeats.filter((seat: string) => {
        return id !== seat;
      });
      setSelectedSeats(newSelectedSeats);
    } else if (selectedSeats.length < 10) {
      setSelectedSeats(() => [...selectedSeats, id]);
    }
  }

  function confirmBooking() {
    setConfirmedSeats((prevSeats) => [...prevSeats, ...selectedSeats]);
    localStorage.setItem(
      state.movie.id.toString(),
      [...confirmedSeats, ...selectedSeats].join(",")
    );
    if (selectedSeats.length > 0) {
      setModalVisible(true);
      setBookingHomeVisible(false);
    } else {
      alert("select minimum 1 seat");
    }
  }

  function closeModal() {
    setModalVisible(false);
    setBookingHomeVisible(true);
    setSelectedSeats([]);
  }

  useEffect(() => {
    if (localStorage.getItem(state.movie.id.toString())) {
      setConfirmedSeats(
        localStorage.getItem(state.movie.id.toString())?.split(",") as string[]
      );
    }
  }, []);

  return (
    <>
      <GlobalStyle />
      <BookingPageStyle bookingHomeVisible={bookingHomeVisible}>
        <BookingPageFlex>
          <ScreenStyle>
            <img src={screen} alt="screen this side"></img>
          </ScreenStyle>

          <SeatNumberStyle>
            {data.map((num) => {
              return (
                <SeatStyle>
                  <h1>{num}</h1>
                </SeatStyle>
              );
            })}
          </SeatNumberStyle>

          <AllSeatsStyle>
            {seats.row.map((item) => {
              return (
                <RowSeatStyle>
                  <LetterSeatStyle>
                    <h1>{item}</h1>
                  </LetterSeatStyle>

                  {seats.data.map((seatNumber) => {
                    return (
                      <>
                        {confirmedSeats?.includes(item + seatNumber) ? (
                          <img
                            key={item + seatNumber}
                            src={greySeat}
                            alt="confirmed seat"
                          ></img>
                        ) : selectedSeats.includes(item + seatNumber) ? (
                          <img
                            onClick={() => {
                              handleSeatClick(item + seatNumber);
                            }}
                            src={blueSeat}
                            alt="selected seat"
                          ></img>
                        ) : (
                          <img
                            onClick={() => {
                              handleSeatClick(item + seatNumber);
                            }}
                            src={whiteSeat}
                            alt="seat"
                          ></img>
                        )}
                      </>
                    );
                  })}
                </RowSeatStyle>
              );
            })}
          </AllSeatsStyle>

          <Button onclick={confirmBooking}>Confirm Booking</Button>
        </BookingPageFlex>
      </BookingPageStyle>
      {modalVisible ? (
        <ConfirmBooking
          closeModal={closeModal}
          selectedSeats={selectedSeats}
          confirmedSeats={confirmedSeats}
        >
          {props.children}
        </ConfirmBooking>
      ) : null}
    </>
  );
}
