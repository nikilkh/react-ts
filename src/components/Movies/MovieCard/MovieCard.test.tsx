import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { MovieCard } from "./MovieCard";

describe("renders learn react link", () => {
  it("should render hello world", () => {
    const { container } = render(
      <BrowserRouter><MovieCard
      movie={{
        id: 0,
        title: "",
        poster_path: "",
      }}
    /></BrowserRouter>
    );

    expect(container).toMatchSnapshot();
  });
});
