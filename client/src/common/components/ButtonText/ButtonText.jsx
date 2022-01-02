import Text from "../Text";
import Icon from "../Icon";
import { getColorClassName } from "../../utils";

const ButtonText = ({ color, children, iconName }) => {
  return (
    <button className={`button-text ${getColorClassName(color)}`}>
      <Icon name={iconName} className="button-text__icon" />
      <Text isBold>{children}</Text>
    </button>
  );
};

export default ButtonText;
