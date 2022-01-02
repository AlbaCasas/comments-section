import { FaPlus, FaMinus, FaPen, FaTrash } from "react-icons/fa";
import { getColorClassName } from "../../utils";

const Icon = ({ name, color, className = "" }) => {
  const fullClassName = `icon ${getColorClassName(color)} ${className}`;
  switch (name) {
    case "plus":
      return <FaPlus className={fullClassName} />;
    case "minus":
      return <FaMinus className={fullClassName} />;
    case "pencil":
      return <FaPen className={fullClassName} />;
    case "trash":
      return <FaTrash className={fullClassName} />;
    default:
      return null;
  }
};

export default Icon;
