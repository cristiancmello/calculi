import "./Display.css";

export interface DisplayProps {
  expression?: {
    line: string;
    result: string;
  };
}

const Display = ({ expression }: DisplayProps) => {
  let displayValue = expression?.result;

  if (!expression) displayValue = "-";

  if (expression?.result) displayValue = expression.result;

  return (
    <div className="display-border">
      <div className="display-background">
        <div className="display-content">
          <span data-testid="display-expression">{expression?.line}</span>
          <input
            data-testid="display-value"
            type="text"
            value={displayValue}
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default Display;
