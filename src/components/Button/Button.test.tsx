import { render } from "@testing-library/react";
import { execPath } from "process";
import { Button } from "./Button";

const mockClickHandle = jest.fn();

describe("renders learn react link", () => {
  it("should render hello world", () => {
    const { container } = render(
      <Button onclick={mockClickHandle} children="click me" />
    );
    expect(container).toMatchSnapshot();
    
  });
});
