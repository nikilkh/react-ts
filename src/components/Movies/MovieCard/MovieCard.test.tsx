import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { MovieCard } from "./MovieCard"
const movie = {
  id: 0,
  title: "",
  poster_path: "",
};
const handleBookNow = jest.fn();

describe("<MovieCard/>", () => {
  it("should take snapshot", () => {
    const { container } = render(
      <BrowserRouter>
        <MovieCard movie={movie} />
      </BrowserRouter>
    );

    expect(container).toMatchSnapshot();
  });

  test("book now button", ()=> {
    const button = screen.getby
  })
});
