import { render } from "@testing-library/react";
import { Main } from "./Main";

describe("<Main/>", () => {
  it("should take snapshot", () => {
    const { container } = render(<Main />);
    expect(container).toMatchSnapshot();
  });
});
