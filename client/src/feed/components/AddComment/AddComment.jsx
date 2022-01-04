import TextArea from "../../../common/components/TextArea";
import Button from "../../../common/components/Button";
import Avatar from "../../../common/components/Avatar";
import Card from "../../../common/components/Card";
import { getComments, createComment } from "../../services/comments";
import { FeedContext } from "../../FeedContext";
import { useContext } from "react";

const AddComment = ({ userPicture, className = "" }) => {
  const { setComments } = useContext(FeedContext);

  return (
    <Card className={`add-comment ${className}`}>
      <Avatar img={userPicture} className="add-comment__avatar" />
      <form
        className="add-comment__form"
        onSubmit={async (e) => {
          e.preventDefault();
          await createComment(e.target[0].value);
          const comments = await getComments();
          setComments(comments);
        }}
      >
        <TextArea placeholder="Add a comment..."></TextArea>
        <Button className="add-comment__button">send</Button>
      </form>
    </Card>
  );
};

export default AddComment;
