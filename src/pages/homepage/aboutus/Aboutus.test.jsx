// src/components/Aboutus/Aboutus.test.jsx
import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Aboutus from "./Aboutus";

describe("Aboutus component", () => {
  it("renders heading, paragraph, and image", () => {
    render(<Aboutus />);

    // Check the heading
    const heading = screen.getByText(/who we are\?/i);
    expect(heading).toBeInTheDocument();

    // Check the paragraph (partial text match)
    const paragraph = screen.getByText(/Welcome to Inspired By/i);
    expect(paragraph).toBeInTheDocument();

    // Check the image by alt text
    const image = screen.getByAltText(/aboutus/i);
    expect(image).toBeInTheDocument();

    // Optional: check image src includes 'aboutusphoto.jpg'
    expect(image.src).toContain("aboutusphoto.jpg");
  });
});
