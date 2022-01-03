import Avatar from "../../../common/components/Avatar";
import Card from "../../../common/components/Card";
import Text from "../../../common/components/Text";
import Likes from "../Likes";
import ButtonText from "../../../common/components/ButtonText";

const Comment = ({
  userName,
  userPicture,
  likes,
  createdAt,
  children,
  className,
}) => {
  return (
    <Card className={`comment ${className}`}>
      <Likes count={likes} className="comment__likes" />
      <ButtonText iconName={"trash"} className={"comment__delete"} color="red">
        Delete
      </ButtonText>
      <div className="comment__box">
        <div className="comment__header">
          <Avatar img={userPicture} className="comment__avatar" />
          <Text isBold color="dark" className="comment__username">
            {userName}
          </Text>
          <Text>{createdAt}</Text>
        </div>
        <div className="comment__content">
          <Text>{children}</Text>
        </div>
      </div>
    </Card>
  );
};

export default Comment;
