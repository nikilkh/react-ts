import { Route, Routes } from "react-router-dom";
import { BookingPage } from "./components/Tickets/BookingPage";
import { Main } from "./components/Movies/Main";

export const App = () => {
  return (
    <div>
<Routes>
      <Route path="/" element={<Main />} />

      <Route
        path="/book/:id/:title"
        element={<BookingPage children={undefined} />}
      ></Route>
    </Routes>
    </div>
    
  );
};
