// src/components/Services/Services.test.jsx
// src/setupTests.js (or at the top of each test file)
import '@testing-library/jest-dom';

import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Services from "./Services";

describe("Services component", () => {
  it("renders heading, items, and arrows", () => {
    render(<Services />);

    // Check the heading
    const heading = screen.getByText(/services/i);
    expect(heading).toBeInTheDocument();

    // Check some of the scrollable items
    const item1 = screen.getByText(/Item1/i);
    const item2 = screen.getByText(/Item2/i);
    const item3 = screen.getByText(/Item3/i);
    expect(item1).toBeInTheDocument();
    expect(item2).toBeInTheDocument();
    expect(item3).toBeInTheDocument();

    // Check the arrow buttons
    const leftArrow = screen.getByText(/←/i);
    const rightArrow = screen.getByText(/→/i);
    expect(leftArrow).toBeInTheDocument();
    expect(rightArrow).toBeInTheDocument();

    // Optional: simulate clicks to ensure buttons are clickable
    fireEvent.click(leftArrow);
    fireEvent.click(rightArrow);
  });
});
