import { render, screen } from "@testing-library/react";

import App from "./App";

describe("Componente App", () => {
  it("o display deve mostrar '0'", () => {
    render(<App />);

    expect(screen.getByTestId("display-value")).toHaveDisplayValue("0");
  });

  it("o display deve mostrar botao '0'", () => {
    render(<App />);

    const zeroButton = screen.getByTestId("zero-button");

    expect(zeroButton.textContent).toBe("0");
  });
});
