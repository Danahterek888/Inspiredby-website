// src/components/Services/Services.test.jsx
import '@testing-library/jest-dom';
import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Services from "./Services";

describe("Services component", () => {
  it("renders heading, items, and arrows", () => {
    render(<Services />);

    // Check the heading using role for clarity
    const heading = screen.getByRole("heading", { name: /services/i });
    expect(heading).toBeInTheDocument();

    // Check some of the scrollable items
    const item1 = screen.getByText(/Item1/i);
    const item2 = screen.getByText(/Item2/i);
    const item3 = screen.getByText(/Item3/i);
    expect(item1).toBeInTheDocument();
    expect(item2).toBeInTheDocument();
    expect(item3).toBeInTheDocument();

    // Check the arrow buttons using test ids
    const leftArrow = screen.getByTestId("scroll-left");
    const rightArrow = screen.getByTestId("scroll-right");
    expect(leftArrow).toBeInTheDocument();
    expect(rightArrow).toBeInTheDocument();

    // Mock scrollBy because jsdom doesn't implement it
    const scrollByMock = vi.fn();
    const scrollContainer = screen.getByTestId("scroll-container");
    scrollContainer.scrollBy = scrollByMock;

    // Simulate clicks
    fireEvent.click(leftArrow);
    fireEvent.click(rightArrow);

    // Check if scrollBy was called
    expect(scrollByMock).toHaveBeenCalled();
  });
});
