import Text from "../Text";
import Icon from "../Icon";

const ButtonText = ({ color, children, iconName, className, onClick }) => {
  return (
    <button className={`button-text ${className}`} onClick={onClick}>
      <Icon name={iconName} className="button-text__icon" color={color} />
      <Text isBold color={color}>
        {children}
      </Text>
    </button>
  );
};

export default ButtonText;
