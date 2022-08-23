import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { BookingPage } from "./BookingPage";

describe("renders learn react link", () => {
  it("should render hello world", () => {
    const { container } = render(
      <BrowserRouter>
        <BookingPage children={undefined} />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
