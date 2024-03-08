import { render, screen } from "@testing-library/react";

import Display from "./Display";

describe("Componente Display", () => {
  const searchByDisplayValue = () => {
    return screen.getByTestId("display-value");
  };

  it("renderiza corretamente sem nenhum parametro para mostrador", () => {
    render(<Display />);

    expect(searchByDisplayValue()).toHaveDisplayValue("-");
  });

  it("deve mostrar resultado da expressão e explicação do cálculo", () => {
    render(<Display expression={{ line: "1", result: "1" }} />);

    expect(searchByDisplayValue()).toHaveDisplayValue("1");
    expect(screen.getByTestId("display-expression")).toHaveTextContent(/^1$/);
  });
});
