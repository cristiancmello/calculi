import { fireEvent, render, screen } from "@testing-library/react";

import App from "./App";
import { it } from "node:test";

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
   // it é uma função definida pela framework jasmine 
   // Segundo argumento é o arrow function -> () =>{}
   it("o display deve mostrar botao '1'", () => {
    // Render aqui ele ajuda a gente a imprimir uma informação no navegador, nesse caso é o que foi criado no App.tsx;
    render(<App />);

    // Const - Constante;
    // screen - Uma propriedade reservada do DOM (Data Objects Model)
    // getByTestId - Query do componente -> query por sua vez nos ajuda a manipular dos parametros de URL
    const oneButton = screen.getByTestId("one-button");

    // fireEvent = Ele permite que você dispare eventos DOM simples, como click, change, mouseover, etc
    fireEvent.click(oneButton); // Simulando o clique no botão 1;

    // expect lhe dá acesso a inúmeros "matchers" que permitem validar diferentes coisas.
    // screen - Propriedade reservada;
    // getByTestId - Query do que está contido no display-value;
    // toHaveDisplayValue - se o valor que está no display é o valor que informamos
    expect(screen.getByTestId("display-value")).toHaveDisplayValue("1");
   });

   it("O display deve mostrar o botão '2", () => {
    render(<App />);
    const twoButton = screen.getByTestId("two-button");
    fireEvent.click(twoButton);
    expect(screen.getByTestId("display-value")).toHaveDisplayValue("2");
   });

   it("O display deve monstrar o botão '3", () => {
    render(<App />);
    const threeButton = screen.getByTestId("three-button");
    fireEvent.click(threeButton);
    expect(screen.getByTestId("display-value")).toHaveDisplayValue("3");
   });

   it("O display deve mostrar o botão 4", () => {
    render(<App />);
    const fourButton = screen.getByTestId("four-button");
    fireEvent.click(fourButton);
    expect(screen.getByTestId("display-value")).toHaveDisplayValue("4");
   });

   it("O display deve mostrar o botão 5", () => {
    render(<App />);
    const fiveButton = screen.getByTestId("five-button");
    fireEvent.click(fiveButton);
    expect(screen.getByTestId("display-value")).toHaveDisplayValue("5");
   });

   it("O display deve mostrar o botão 6", () => {
    render(<App />);
    const sixButton = screen.getByTestId("six-button");
    fireEvent.click(sixButton);
    expect(screen.getByTestId("display-value")).toHaveDisplayValue("6");
   });

   it("O display deve mostrar o botão 7", () => {
    render(<App />);
    const sevenButton = screen.getByTestId("seven-button");
    fireEvent.click(sevenButton);
    expect(screen.getByTestId("display-value")).toHaveDisplayValue("7");
   });

   it("O display deve mosntrar o botão 8", () => {
    render(<App />);
    const eigthButton = screen.getByTestId("eight-button");
    fireEvent.click(eigthButton);
    expect(screen.getByTestId("display-value")).toHaveDisplayValue("8");
   });

   it("O display deve mostrar o botão 9", () => {
    render(<App />);
    const nineButton = screen.getByTestId("nine-button");
    fireEvent.click(nineButton);
    expect(screen.getByTestId("display-value")).toHaveDisplayValue("9");
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
