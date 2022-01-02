import Icon from "../../../common/components/Icon";
import Text from "../../../common/components/Text";
const Likes = ({ count, color, className = "" }) => {
  return (
    <div className={`likes ${className} ${color}`}>
      <Icon name="plus" className="likes__icon" />
      <Text isBold className="likes__counter">
        {count}
      </Text>
      <Icon name="minus" className="likes__icon" />
    </div>
  );
};

export default Likes;
