// src/App.test.jsx
// src/setupTests.js (or at the top of each test file)
import '@testing-library/jest-dom';

import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  it("renders without crashing", () => {
    render(<App />);

    // Check that some visible text from Navbar or App is rendered
    const heading = screen.getByText(/Your future isn’t a guess/i);
    expect(heading).toBeInTheDocument();
  });
});
