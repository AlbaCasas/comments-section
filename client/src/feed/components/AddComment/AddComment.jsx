import TextArea from "../../../common/components/TextArea";
import Button from "../../../common/components/Button";
import Avatar from "../../../common/components/Avatar";
import Card from "../../../common/components/Card";

const AddComment = ({ userPicture, className = "" }) => {
  return (
    <Card className={`add-comment ${className}`}>
      <Avatar img={userPicture} className="add-comment__avatar" />
      <TextArea placeholder="Add a comment..."></TextArea>
      <Button className="add-comment__button">send</Button>
    </Card>
  );
};

export default AddComment;
