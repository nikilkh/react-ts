import { render } from "@testing-library/react";
import { App } from "./App";
import { BrowserRouter } from 'react-router-dom';

describe("renders learn react link", () => {
  it("should render hello world", () => {
    render(<BrowserRouter><App/></BrowserRouter>);
    
  });
});