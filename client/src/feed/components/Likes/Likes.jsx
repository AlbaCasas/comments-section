import Icon from "../../../common/components/Icon";
import Text from "../../../common/components/Text";

const Likes = ({ count, className = "" }) => {
  return (
    <div className={`likes ${className}`}>
      <Icon name="plus" className="likes__icon" />
      <Text isBold className="likes__counter">
        {count}
      </Text>
      <Icon name="minus" className="likes__icon" />
    </div>
  );
};

export default Likes;
