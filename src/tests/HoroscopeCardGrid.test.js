import React from "react";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import HoroscopeCardGrid from "../components/HoroscopeCardGrid";

describe("HoroscopeCardGrid", () => {
  const mockSign = {
    id: 1,
    name: "Aries",
    init_date: "21-03",
    end_date: "20-04",
    prediction: "Hoy es un gran día para Aries.",
    image: "aries.jpg",
  };

  test("should render the correct content", () => {
    render(<HoroscopeCardGrid sign={mockSign} />);

    expect(screen.getByText("Aries")).toBeInTheDocument();
    expect(screen.getByText("21-03 - 20-04")).toBeInTheDocument();
    expect(screen.getByText("Hoy es un gran día para Aries.")).toBeInTheDocument();
    const imageElement = screen.getByAltText("aries.jpg");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", "../../../images/aries.jpg");
  });
});
