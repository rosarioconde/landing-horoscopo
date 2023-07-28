import React from "react";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./../App";

test("renders App component", () => {
  render(<App />);

  // Verifica que el componente App se renderiza correctamente buscando su título
  expect(screen.getByText("Horóscopo")).toBeInTheDocument();
});
