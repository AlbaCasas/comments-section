import { FaPlus, FaMinus, FaPen, FaTrash } from "react-icons/fa";
import { getColorClassName } from "../../utils";

const Icon = ({ name, color }) => {
  const className = `icon ${getColorClassName(color)}`;
  switch (name) {
    case "plus":
      return <FaPlus className={className} />;
    case "minus":
      return <FaMinus className={className} />;
    case "pencil":
      return <FaPen className={className} />;
    case "trash":
      return <FaTrash className={className} />;
    default:
      return null;
  }
};

export default Icon;
