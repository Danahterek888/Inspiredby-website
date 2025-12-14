// src/components/Podcast/Podcast.test.jsx
// src/setupTests.js (or at the top of each test file)
import '@testing-library/jest-dom';

import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Podcast from "./podcast";

describe("Podcast component", () => {
  it("renders heading, video, and paragraph", () => {
    render(<Podcast />);

    // Check the heading
    const heading = screen.getByText(/podcast/i);
    expect(heading).toBeInTheDocument();

    // Check the video element
    const video = screen.getByRole("video");
    expect(video).toBeInTheDocument();

    // Check the paragraph text (partial match is fine)
    const paragraph = screen.getByText(/Inspired By is a dynamic/i);
    expect(paragraph).toBeInTheDocument();
  });
});
