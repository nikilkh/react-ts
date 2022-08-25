import { render, screen } from "@testing-library/react";
import { NoResult } from "./NoResult";

describe("renders learn react link", () => {
  it("should render hello world", () => {
    const {container} = render(<NoResult/>);
    expect(container).toMatchSnapshot();
  });

  test("to check error heading", () => {
    render(<NoResult />);
    const errorHeading = screen.getByText(/Sorry,there is no result for keyword you searched/i);
    expect(errorHeading).toBeInTheDocument;
  })

  test("to check error image", () => {
    render(<NoResult />);
    const errorImage = screen.getAllByAltText("Sorry No Results");
    expect(errorImage).toBeInTheDocument;
  })
});