export function getColorClassName(color) {
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
