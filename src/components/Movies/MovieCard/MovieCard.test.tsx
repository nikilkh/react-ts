import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { MovieCard } from "./MovieCard";

const movie = {
  id: 766507,
  title: "Prey",
  poster_path: "/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg",
};

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom' , () => ({
    ...jest.requireActual("react-router-dom") as any,
    useNavigate: () => mockUseNavigate,
}));

describe("<MovieCard/>", () => {
  it("should take snapshot", () => {
    const { container } = render(
      <BrowserRouter>
        <MovieCard movie={movie} />
      </BrowserRouter>
    );

    expect(container).toMatchSnapshot();
  });

  test("for movie title", () => {
    render(<BrowserRouter><MovieCard movie={movie}></MovieCard></BrowserRouter>)
    const movieTitle = screen.getByText(/Prey/i);
    expect(movieTitle).toBeInTheDocument;
  });

  it("NavLink should have id and path attribute", () => {

    render(<BrowserRouter><MovieCard movie={movie} /></BrowserRouter>);
    // const Nav = screen.getByRole<HTMLAnchorElement>("link");
    // expect(Nav).toHaveAttribute("href", "/book/766507/Prey");
    const bookNowButton = screen.getByRole("button");
    fireEvent.click(bookNowButton)
    expect(mockUseNavigate).toHaveBeenCalledWith("/book/766507/Prey", {state: {movie}});
  })
  
});
