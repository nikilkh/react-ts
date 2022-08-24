import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { LandPage } from "./LandPage";

afterEach(cleanup);
describe("<LandPage/>", () => {
  it("should take snapshot", () => {
    const { container } = render(<LandPage />);
    expect(container).toMatchSnapshot();
  });

  test("to check heading", () => {
    render(<LandPage />);
    const heading = screen.getByText(/Movie List/i);
    expect(heading).toBeInTheDocument();
  });
  test("Check input value", () => {
    render(<LandPage />);
    const inputBox = screen.getByPlaceholderText<HTMLInputElement>(
      /search your movie here/i
    );
    expect(inputBox).toBeInTheDocument();
    fireEvent.change(inputBox, { target: { value: "hello" } });
    expect(inputBox.value).toBe("hello");
  });

  test("to click search button", () => {
    render(<LandPage />);
    const button = screen.getByTestId("searchButton");
    console.log(button);
    fireEvent.click(button);
  });
});
