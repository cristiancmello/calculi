import React, { useState } from 'react';

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
      <input data-testid="display-value" type="text" value={displayValue} readOnly />
      <button data-testid="zero-button" onClick={() => handleClick("0")}>0</button>
      <button data-testid="zero-button" onClickCapture={() => handleClick("1")}>1</button>
    </>
  );
}

export default App;
