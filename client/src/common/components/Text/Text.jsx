import { getColorClassName } from "../../utils";

const Text = ({ children, isBold, color }) => {
  const colorClassName = getColorClassName(color);
  return (
    <p className={`text ${isBold && "text--bold"} ${colorClassName}`}>
      {children}
    </p>
  );
};

export default Text;
