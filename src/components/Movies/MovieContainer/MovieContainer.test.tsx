import { act, render, screen } from "@testing-library/react";
import { execPath } from "process";
import { MoviesContainer } from "./MoviesContainer";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([{
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
    }]),
  }),
) as jest.Mock;



describe("<MovieContainer />", () => {
  it("should take snapshot", () => {
    const {container} = render(<MoviesContainer/>);
    expect(container).toMatchSnapshot();
  });

  test("to check fetch", async() => {
    const conatiner = await act(async() => {render(<MoviesContainer />)});
    //  const title = screen.getByText("Prey");
    //  expect(title).toBeInTheDocument;
    })
});