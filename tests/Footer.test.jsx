// tests/components/Footer.test.jsx
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Footer from "../../src/components/Footer";

describe("Footer Component", () => {
  test("renders About us section with correct link", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    const aboutTitle = screen.getByText(/About us/i);
    expect(aboutTitle).toBeInTheDocument();
    expect(aboutTitle.closest("a")).toHaveAttribute("href", "#about");

    const aboutText = screen.getByText(/Welcome to Inspired By/i);
    expect(aboutText).toBeInTheDocument();
  });

  test("renders Services section with correct link", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    const servicesTitle = screen.getByText(/Services/i);
    expect(servicesTitle).toBeInTheDocument();
    expect(servicesTitle.closest("a")).toHaveAttribute("href", "#ser");

    const servicesText = screen.getByText(/At Inspired By, we are passionate/i);
    expect(servicesText).toBeInTheDocument();
  });

  test("renders Podcast section with correct link", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    const podcastTitle = screen.getByText(/Podcast/i);
    expect(podcastTitle).toBeInTheDocument();
    expect(podcastTitle.closest("a")).toHaveAttribute("href", "#pod");

    const podcastText = screen.getByText(/Inspired By is a/i);
    expect(podcastText).toBeInTheDocument();
  });
});
