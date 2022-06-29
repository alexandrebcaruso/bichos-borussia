import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

test("renders the screen", () => {
    render(<App />);
    const element = screen.getByTestId("app");
    expect(element).toBeInTheDocument();
});
