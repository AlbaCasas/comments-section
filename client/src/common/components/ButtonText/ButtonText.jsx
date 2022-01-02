import Text from "../Text";
import Icon from "../Icon";

const ButtonText = ({ color, children, iconName, className }) => {
  return (
    <button className={`button-text ${className}`}>
      <Icon name={iconName} className="button-text__icon" color={color} />
      <Text isBold color={color}>
        {children}
      </Text>
    </button>
  );
};

export default ButtonText;
