import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Home from "./page";

describe("Home", () => {
  it("renders the navigation with brand name", () => {
    render(<Home />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getAllByText("Planifit").length).toBeGreaterThanOrEqual(1);
  });

  it("renders all main sections", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: "Cómo funciona" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: "Herramientas de alto rendimiento",
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Planes para cada etapa" })
    ).toBeInTheDocument();
  });

  it("renders pricing plans with prices", () => {
    render(<Home />);
    expect(screen.getByText("Plan Gratuito")).toBeInTheDocument();
    expect(screen.getByText("Plan Pro")).toBeInTheDocument();
    expect(screen.getByText("$0")).toBeInTheDocument();
    expect(screen.getByText("$9.99")).toBeInTheDocument();
  });

  it("renders social media links with accessible labels", () => {
    render(<Home />);
    expect(screen.getByLabelText("Facebook")).toBeInTheDocument();
    expect(screen.getByLabelText("Instagram")).toBeInTheDocument();
  });
});
