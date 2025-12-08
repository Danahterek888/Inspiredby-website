import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../../src/components/Navbar";

describe("Navbar Component", () => {
  test("renders logo image", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const logo = screen.getByAltText("Logo");
    expect(logo).toBeInTheDocument();
  });

  test("renders About us link", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const aboutLink = screen.getByText("About us");
    expect(aboutLink).toBeInTheDocument();
  });

  test("renders Contact Us route link", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const contactLink = screen.getByText("Contact Us");
    expect(contactLink).toBeInTheDocument();
  });
});
