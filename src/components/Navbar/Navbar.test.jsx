// src/components/Contactus/Contactus.test.jsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Contactus from "./Contactus";

describe("Contactus component", () => {
  it("renders the contact message", () => {
    render(<Contactus />);

    // Check for some text in the component (partial match)
    const message = screen.getByText(/we're always happy to hear from you/i);
    expect(message).toBeInTheDocument();

    // Optional: check that some unique part of the text exists
    const funnyText = screen.getByText(/meoooooooooooooowwwwwwwwww/i);
    expect(funnyText).toBeInTheDocument();
  });
});
