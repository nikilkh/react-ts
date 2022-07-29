import { Children } from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
// import App from "../App";
import BookingPage from "./BookingPage";
import { LandPage } from "./LandPage";
import MoviesContainer from "./MoviesContainer";


export default function Main() {
  return (
    <Routes>
      <Route path="/" element={<App ></App>}>
        <Route path=":movie" element={<MoviesContainer></MoviesContainer>}></Route>
        
      </Route>
      
      <Route path="/bookingpage" element={<BookingPage></BookingPage>}></Route>
    </Routes>
  );
}