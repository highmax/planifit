import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { NextIntlClientProvider } from "next-intl";
import messages from "../../messages/es.json";
import Home from "./page";

describe("Home", () => {
  const renderWithProviders = (component: React.ReactNode) => {
    return render(
      <NextIntlClientProvider locale="es" messages={messages}>
        {component}
      </NextIntlClientProvider>
    );
  };
  it("renders the navigation with brand name", () => {
    renderWithProviders(<Home />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getAllByText("Planifit").length).toBeGreaterThanOrEqual(1);
  });

  it("renders all main sections", () => {
    renderWithProviders(<Home />);
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
    renderWithProviders(<Home />);
    expect(screen.getByText("Plan Gratuito")).toBeInTheDocument();
    expect(screen.getByText("Plan Pro")).toBeInTheDocument();
    expect(screen.getByText("$0")).toBeInTheDocument();
    expect(screen.getByText("$9.99")).toBeInTheDocument();
  });

  it("renders social media links with accessible labels", () => {
    renderWithProviders(<Home />);
    expect(screen.getByLabelText("Facebook")).toBeInTheDocument();
    expect(screen.getByLabelText("Instagram")).toBeInTheDocument();
  });
});
