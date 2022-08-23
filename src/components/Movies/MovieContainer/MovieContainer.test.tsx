import { render } from "@testing-library/react";
import { MoviesContainer } from "./MoviesContainer";

describe("renders learn react link", () => {
  it("should render hello world", () => {
    const {container} = render(<MoviesContainer/>);
    expect(container).toMatchSnapshot();
  });
});