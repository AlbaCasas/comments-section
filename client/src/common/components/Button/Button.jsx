import { getBgClassName } from "../../utils";

const Button = ({ color, children }) => {
  return (
    <button className={`button ${getBgClassName(color)}`}>{children}</button>
  );
};

export default Button;
