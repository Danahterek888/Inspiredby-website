// src/components/Podcast/Podcast.test.jsx
import '@testing-library/jest-dom';
import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Podcast from "./podcast"; // make sure the filename matches casing

describe("Podcast component", () => {
  it("renders heading, video, and paragraph", () => {
    render(<Podcast />);

    // Check the heading
    const heading = screen.getByRole("heading", { name: /podcast/i });
    expect(heading).toBeInTheDocument();

    // Check the video element using test id
    const video = screen.getByTestId("podcast-video");
    expect(video).toBeInTheDocument();

    // Check the paragraph text (partial match is fine)
    const paragraph = screen.getByText(/Inspired By is a dynamic/i);
    expect(paragraph).toBeInTheDocument();
  });
});
