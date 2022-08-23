import { render } from "@testing-library/react";
import { NoResult } from "./NoResult";

describe("renders learn react link", () => {
  it("should render hello world", () => {
    const {container} = render(<NoResult/>);
    expect(container).toMatchSnapshot();
  });
});