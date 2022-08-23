import { render } from "@testing-library/react";
import { Main } from "./Main";

describe("renders learn react link", () => {
  it("should render hello world", () => {
    const {container} = render(<Main/>);
    expect(container).toMatchSnapshot();
    
  });
});