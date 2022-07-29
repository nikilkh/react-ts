import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import screen from "./screen.svg";
import whiteSeat from "./whiteSeat.svg";
import greySeat from "./greySeat.svg";
import blueSeat from "./blueSeat.svg";
import ConfirmBooking from "./ConfirmBooking";
import { AllSeatsStyle, BookingPageStyle, RowSeatStyle, ScreenStyle, SeatNumberStyle, SeatStyle, SittingSeatStyle } from "../styles/BookingPage.style";
type movie = {
  id: number
}
interface stateType {
  movie: movie
}



export default function BookingPage() {
  const IMG_URL = "https://image.tmdb.org/t/p/w500";

  const [selectedSeats, setSelectedSeats] = useState<string[] >([]);
  let [confirmedSeats, setConfirmedSeats] = useState<string[] | undefined | null >([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [bookingHomeVisible, setBookingHomeVisible] = useState<boolean>(true);
  let seatsForPriceCalc = [];
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const seats = [
    {
      row: "A",
      seat: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    {
      row: "B",
      seat: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    {
      row: "C",
      seat: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    {
      row: "D",
      seat: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
  ];
  let location= useLocation();
const state = location.state as stateType;
  // console.log(location.state.movie.id, location.state.movie.poster_path);
  function handleSeatClick(id: string) {
    if (selectedSeats?.includes(id)) {
      let newSelectedSeats = selectedSeats.filter((seat: string) => {
        return id !== seat;
      });
      setSelectedSeats(newSelectedSeats);
    } else if (selectedSeats.length < 10) {
      setSelectedSeats(() => [...selectedSeats, id]);
    } else alert("you can not select more than 10 seats");
  }

  function confirmBooking() {
    localStorage.setItem(state.movie.id.toString() , (selectedSeats.toString()));
    
    setConfirmedSeats(
      localStorage.getItem(state.movie.id.toString())?.split(",")
      );
    setModalVisible(true);
    setBookingHomeVisible(false);
  }

  function closeModal() {
    setModalVisible(false);
    setBookingHomeVisible(true);
  }

  useEffect(() => {
    if (localStorage.getItem(state.movie.id.toString()) !== null || undefined) {
      setSelectedSeats(
        localStorage.getItem(state.movie.id.toString()).split(",")
      );
      setConfirmedSeats(
        localStorage.getItem(state.movie.id.toString())?.split(",")
      );
      
    }
  }, []);

  // console.log(location.state.movie.id);
  return (
    <>
    `<BookingPageStyle
        style={
          bookingHomeVisible
            ? { background: "white" }
            : { background: "rgba(229, 229, 229, 0.6)", pointerEvents: "none" }
        }
      >
        <ScreenStyle>
          <img src={screen}></img>
        </ScreenStyle>

        <div style={{ margin: "auto" }}>
          <SeatNumberStyle>
            {data.map((num) => {
              return (
                <SeatStyle>
                  <h1>{num}</h1>
                </SeatStyle>
              );
            })}
          </SeatNumberStyle>
        </div>

        <AllSeatsStyle>
          {seats.map((item) => {
            return (
              <RowSeatStyle>
                <div>
                  <h1>{item.row}</h1>
                </div>
                {item.seat.map((seatNumber) => {
                  return (
                    <>
                      <SittingSeatStyle
                        onClick={() => {
                          handleSeatClick(item.row + seatNumber);
                        }}
                      >
                        {confirmedSeats?.includes(item.row + seatNumber) ? (
                          <img key={item.row + seatNumber} src={greySeat}></img>
                        ) : selectedSeats.includes(item.row + seatNumber) ? (
                          <img key={item.row + seatNumber} src={blueSeat}></img>
                        ) : (
                          <img
                            key={item.row + seatNumber}
                            src={whiteSeat}
                          ></img>
                        )}
                      </SittingSeatStyle>
                    </>
                  );
                })}
              </RowSeatStyle>
            );
          })}
        </AllSeatsStyle>

        <button onClick={confirmBooking}>Confirm Booking</button>
      </BookingPageStyle>

      {modalVisible ? (
        <ConfirmBooking closeModal={closeModal} selectedSeats={selectedSeats} confirmedSeats={confirmedSeats}>

        </ConfirmBooking>

        
      ) : null}
    </>
  );
}
