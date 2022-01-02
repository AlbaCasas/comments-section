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

export function getBgClassName(bg) {
  switch (bg) {
    case "red":
      return "bg--red";
    case "blue":
      return "bg--blue";
    case "dark":
      return "bg--dark";
    default:
      return "bg--blue";
  }
}
