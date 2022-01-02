function getColorClassName(color) {
  switch (color) {
    case "red":
      return "color--red";
    case "blue":
      return "color--blue";
    case "gray":
      return "color--gray";
    case "dark":
      return "color--dark";
    default:
      return "color--gray";
  }
}

const Text = ({ children, isBold, color }) => {
  const colorClassName = getColorClassName(color);
  return (
    <p className={`text ${isBold && "text--bold"} ${colorClassName}`}>
      {children}
    </p>
  );
};

export default Text;
