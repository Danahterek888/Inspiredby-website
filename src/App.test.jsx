// src/App.test.jsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  it("renders without crashing", () => {
    render(<App />);

    // Replace "Welcome" with text that actually appears in your App
    const element = screen.getByText(/Navbar/i);
    expect(element).toBeInTheDocument();
  });
});
