import React, { useState } from 'react';
import Display from './Display';

function App() {
  // Uma constante
  // useState ele vai nos ajudar a criar o estado do displayValue, que mantem o valor atual do campo de entrada;
  const[displayValue, setDisplayValue] = useState("0");

  // A função handleClick é criada quendo clicamos em um botão, ele deve aparecer no display;
  const handleClick = (value: string) => {
    setDisplayValue(value);
  };

  return (
    <>
    <Display expression={{line: "", result:displayValue}} />  
      <button data-testid="zero-button" onClick={() => handleClick("0")}>0</button>
      <button data-testid="one-button" onClickCapture={() => handleClick("1")}>1</button>
      <button data-testid="two-button" onClickCapture={() => handleClick("2")}>2</button>
      <button data-testid="three-button" onClickCapture={() => handleClick("3")}>3</button>
      <button data-testid="four-button" onClickCapture={() => handleClick("4")}>4</button>
      <button data-testid="five-button" onClickCapture={() => handleClick("5")}>5</button>
      <button data-testid="six-button" onClickCapture={() => handleClick("6")}>6</button>
      <button data-testid="seven-button" onClickCapture={() => handleClick("7")}>7</button>
      <button data-testid="eight-button" onClickCapture={() => handleClick("8")}>8</button>
      <button data-testid="nine-button" onClickCapture={() => handleClick("9")}>9</button>
    </>
  );
}

export default App;
