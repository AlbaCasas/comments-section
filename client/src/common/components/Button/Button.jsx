import { getBgClassName } from "../../utils";

const Button = ({ color, children, className = "" }) => {
  return (
    <button className={`button ${getBgClassName(color)} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
