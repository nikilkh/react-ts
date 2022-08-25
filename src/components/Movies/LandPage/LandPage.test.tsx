import React from "react";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  act,
} from "@testing-library/react";
import { LandPage } from "./LandPage";
import StateContextProvider from "../../Context/context";
import { MemoryRouter } from "react-router-dom";

const movieData = [
  {
    id: 507086,
    poster_path: "/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg",
    title: "Jurassic World Dominion",
  },
  {
    id: 759175,
    poster_path: "/9pCoqX24a6rE981fY1O3PmhiwrB.jpg",
    title: "The Princess",
  },
  {
    id: 919355,
    poster_path: "/uSMJbYhaEpQtF9vkMhpgljc0CA4.jpg",
    title: "Dragon Knight",
  },
];

describe("<LandPage/>", () => {
  beforeEach(() => {
    jest
      .spyOn(global, "fetch")
      .mockImplementation(
        jest.fn(() =>
          Promise.resolve({
            json: () => Promise.resolve({ results: movieData }),
          })
        ) as jest.Mock
      );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

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
    fireEvent.click(button);
  });

  test("to check fetch", async () => {
    render(
      <MemoryRouter>
        <StateContextProvider>
          <LandPage />
        </StateContextProvider>
      </MemoryRouter>
    );
    await screen.findByText("Dragon Knight");
    const title = screen.getByText("Dragon Knight");
    expect(title).toBeInTheDocument;
  });
});
