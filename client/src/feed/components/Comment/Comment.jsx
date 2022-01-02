import Avatar from "../../../common/components/Avatar";
import Card from "../../../common/components/Card";
import Text from "../../../common/components/Text";
import Likes from "../Likes";

const Comment = ({ userName, userPicture, likes, createdAt, children }) => {
  return (
    <Card className="comment">
      <Likes count={likes} className="comment__likes" />
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