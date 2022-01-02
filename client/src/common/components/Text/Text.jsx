import { getColorClassName } from "../../utils";

const Text = ({ children, isBold, color, className }) => {
  const colorClassName = getColorClassName(color);
  return (
    <p
      className={`text ${
        isBold && "text--bold"
      } ${colorClassName} ${className}`}
    >
      {children}
    </p>
  );
};

export default Text;
