import { fireEvent, render, screen } from "@testing-library/react";

import App from "./App";

describe("Componente App", () => {
  // Os casos de testes foram inspirados no Apple Calculator (macOS e iOS)

  it("o display deve mostrar '0'", () => {
    render(<App />);
    expect(screen.getByTestId("display-value")).toHaveDisplayValue("0");
  });

  // Comentado para tomar como base para próximos casos
  it("o display deve mostrar botao '0'", () => {
     render(<App />);

     const zeroButton = screen.getByTestId("zero-button");
     expect(zeroButton.textContent).toBe("0");
   });

   // Aqui é o mesmo que ocorre quando o valor é 1
   it("o display deve mostrar botao '1'", () => {
    render(<App />);

    const oneButton = screen.getByTestId("one-button");
    fireEvent.click(oneButton); // Simulando o clique no botão 1;
    expect(screen.getByTestId("display-value")).toHaveDisplayValue("1");
   });

  it("o display deve mostrar os botões {0, 1, 2, ..., 9}", () => {
    throw new Error("Não implementado");
  });

  it("devemos ter teclado apresentando as operações suportadas {+, -, *, /, =, 1/x, +/-, sqrt2(x)}", () => {
    throw new Error("Não implementado");
  });

  it("ao pressionar {0 (2 vezes)} o display deve mostrar '0'", () => {
    throw new Error("Não implementado");
  });

  it("ao pressionar {a} deve mostrar 'a'", () => {
    throw new Error("Não implementado");
  });

  it("ao pressionar {a (2 vezes)} deve mostrar 'aa' para 'a' diferente de '0'", () => {
    throw new Error("Não implementado");
  });

  it("ao pressionar {a (3 vezes)} deve mostrar 'aaa' para 'a' diferente de '0'", () => {
    throw new Error("Não implementado");
  });

  it("pressionando {a, operador} deve mostrar 'a' para operadores {+, -, *, /}", () => {
    throw new Error("Não implementado");
  });

  it("pressionando {a, operador (2 vezes)} deve mostrar 'a' para operadores {+, -, *, /, =}", () => {
    throw new Error("Não implementado");
  });

  it("pressionando {a, operador} deve calcular 'operador(a)' e mostrar na tela para operadores {+/-, 1/x, sqrt2(x)} (porque são 1-operand)", () => {
    throw new Error("Não implementado");
  });

  it("pressionando {a, operador, =} deve calcular 'a operador a' e mostrar resultado na tela para operadores {+, -, *, /, =, 1/x, +/-, sqrt2(x)}", () => {
    throw new Error("Não implementado");
  });

  it("pressionando {a, operador, = (2 vezes)} deve calcular '(a operador a) operador a' e mostrar resultado na tela para operadores {+, -, *, /, =, 1/x, +/-, sqrt2(x)}", () => {
    throw new Error("Não implementado");
  });

  it("pressionando {a, operador, b} deve mostrar 'b' para operadores {+, -, *, /} (porque o calculo só é executado com '=')", () => {
    throw new Error("Não implementado");
  });

  it("pressionando {a, operador-x, b, operador-y} deve calcular 'a operador-x b' e mostrar resultado na tela para operadores {+, -, *, /} (porque são 2-operand)", () => {
    throw new Error("Não implementado");
  });

  it("pressionando {a, operador-x, b, operador-y, operador-z} deve calcular 'a operador-x b' e mostrar resultado na tela para operadores {+, -, *, /}", () => {
    throw new Error("Não implementado");
  });

  it("pressionando {a, operador, b} deve calcular 'a operador b' e mostrar resultado para operadores {+, -, *, /}", () => {
    throw new Error("Não implementado");
  });

  it("pressionando {a, operador-x, b, operador-y, c} deve calcular '(a operador-x b) operador-y c' e mostrar resultado para operadores {+, -, *, /}", () => {
    throw new Error("Não implementado");
  });
});
