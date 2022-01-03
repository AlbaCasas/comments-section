import { getBgClassName } from "../../utils";

const Button = ({ color, children, className = "", onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`button ${getBgClassName(color)} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
