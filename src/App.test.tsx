import { render } from "@testing-library/react";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";

describe("<App/>", () => {
  it("should take snapshot", () => {
    const { container } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
