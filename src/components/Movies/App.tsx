import { Route, Routes } from "react-router-dom";
import BookingPage from "../Tickets/BookingPage";
import { Main } from "./Main";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />

      <Route
        path="/book/:id/:title"
        element={<BookingPage children={undefined} />}
      ></Route>
    </Routes>
  );
};
