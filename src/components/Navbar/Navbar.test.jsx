// src/components/Navbar/Navbar.test.jsx
// src/setupTests.js (or at the top of each test file)
import '@testing-library/jest-dom';

import React from "react"; // needed to avoid "React is not defined"
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // needed for <Link>
import Navbar from "./Navbar";

describe("Navbar component", () => {
  it("renders logo, links, and button", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    // Check logo
    const logo = screen.getByAltText(/logo/i);
    expect(logo).toBeInTheDocument();

    // Check links
    expect(screen.getByText(/about us/i)).toBeInTheDocument();
    expect(screen.getByText(/services/i)).toBeInTheDocument();
    expect(screen.getByText(/our podcast/i)).toBeInTheDocument();
    expect(screen.getByText(/contact us/i)).toBeInTheDocument();
    expect(screen.getByText(/AR/i)).toBeInTheDocument();

    // Check button
    const button = screen.getByText(/view services/i);
    expect(button).toBeInTheDocument();

    // Optional: check lamp image
    const lamp = screen.getByAltText(/lamp/i);
    expect(lamp).toBeInTheDocument();
  });
});
