// src/components/Footer/Footer.test.jsx
// src/setupTests.js (or at the top of each test file)
import '@testing-library/jest-dom';

import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "./footer";

describe("Footer component", () => {
  it("renders all sections with headings and paragraphs", () => {
    render(<Footer />);

    // Check headings
    const aboutHeading = screen.getByText(/about us/i);
    const servicesHeading = screen.getByText(/services/i);
    const podcastHeading = screen.getByText(/podcast/i);

    expect(aboutHeading).toBeInTheDocument();
    expect(servicesHeading).toBeInTheDocument();
    expect(podcastHeading).toBeInTheDocument();

    // Check paragraph texts (partial matching)
    const aboutText = screen.getByText(/Welcome to Inspired By/i);
    const servicesText = screen.getByText(/At Inspired By, we are passionate/i);
    const podcastText = screen.getByText(/Inspired By is a/i);

    expect(aboutText).toBeInTheDocument();
    expect(servicesText).toBeInTheDocument();
    expect(podcastText).toBeInTheDocument();

    // Check links
    const aboutLink = screen.getByRole("link", { name: /about us/i });
    const servicesLink = screen.getByRole("link", { name: /services/i });
    const podcastLink = screen.getByRole("link", { name: /podcast/i });

    expect(aboutLink).toBeInTheDocument();
    expect(servicesLink).toBeInTheDocument();
    expect(podcastLink).toBeInTheDocument();
  });
});
