// src/components/Contactus/Contactus.test.jsx
import React from "react"; // needed to use JSX
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Contactus from "./Contactus";

describe("Contactus component", () => {
  it("renders the contact message", () => {
    render(<Contactus />);

    // Check main message exists
    const mainText = screen.getByText(/we're always happy to hear from you/i);
    expect(mainText).toBeInTheDocument();

    // Optional: check for unique or funny part of text
    const funnyText = screen.getByText(/meoooooooooooooowwwwwwwwww/i);
    expect(funnyText).toBeInTheDocument();
  });
});
