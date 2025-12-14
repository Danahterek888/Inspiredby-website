// src/components/Navbar/Navbar.test.jsx
import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "./Navbar";
import '@testing-library/jest-dom'; // ensures toBeInTheDocument works

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

    // Check links by role (safer than getByText when duplicates exist)
    const aboutLink = screen.getByRole("link", { name: /about us/i });
    const servicesLink = screen.getByRole("link", { name: /^services$/i }); // exact match for link
    const podcastLink = screen.getByRole("link", { name: /our podcast/i });
    const contactLink = screen.getByRole("link", { name: /contact us/i });
    const arLink = screen.getByRole("link", { name: /AR/i });

    expect(aboutLink).toBeInTheDocument();
    expect(servicesLink).toBeInTheDocument();
    expect(podcastLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
    expect(arLink).toBeInTheDocument();

    // Check button separately (View Services button)
    const button = screen.getByRole("button", { name: /view services/i });
    expect(button).toBeInTheDocument();

    // Optional: check lamp image
    const lamp = screen.getByAltText(/lamp/i);
    expect(lamp).toBeInTheDocument();
  });
});
