import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Screen } from "../../SVGs/Screen";

import { ConfirmBooking } from "../ConfirmBooking";
import {
  AllSeatsStyle,
  BookingPageFlex,
  BookingPageStyle,
  LetterSeatStyle,
  RowSeatStyle,
  ScreenStyle,
  SeatNumberStyle,
  SeatStyle,
} from "../BookingPageStyle/index";
import { GlobalStyle } from "../../../styles/Global.styled";
import { Button } from "../../Button/Button";
import { Seat } from "../../SVGs/Seat";
import { BookingProps, stateType } from "./BookingPage.types";

export const BookingPage = (props: BookingProps) => {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [confirmedSeats, setConfirmedSeats] = useState<string[]>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [bookingHomeVisible, setBookingHomeVisible] = useState<boolean>(true);

  const seats = {
    row: ["A", "B", "C", "D"],
    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  };

  const location = useLocation();
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
            <Screen />
          </ScreenStyle>

          <SeatNumberStyle>
            {seats.data.map((num) => {
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
                        {(() => {
                          switch (true) {
                            case confirmedSeats.includes(item + seatNumber):
                              return <Seat colorN="#626262" />;
                            case selectedSeats.includes(item + seatNumber):
                              return (
                                <Seat
                                  colorN="#724FD8"
                                  onClick={() => {
                                    handleSeatClick(item + seatNumber);
                                  }}
                                />
                              );
                            default:
                              return (
                                <Seat
                                  colorN="#DADADA"
                                  onClick={() => {
                                    handleSeatClick(item + seatNumber);
                                  }}
                                />
                              );
                          }
                        })()}
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
};
