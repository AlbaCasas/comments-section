import Modal from "../../../common/components/Modal";
import Text from "../../../common/components/Text";
import Button from "../../../common/components/Button";
import { useContext } from "react";
import { FeedContext } from "../../FeedContext";
import { deleteComment, getComments } from "../../services/comments";

const ModalDelete = ({ closeModal, commentId }) => {
  const { setComments } = useContext(FeedContext);
  return (
    <Modal
      title={"Delete comment"}
      className="modal-delete"
      closeModal={closeModal}
    >
      <Text className="modal-delete__text">
        Are you sure you want to delete this comment? This will remove the
        comment and can't be undone.
      </Text>
      <div className="modal-delete__footer">
        <Button
          className="modal-delete__button"
          onClick={closeModal}
          color="dark"
        >
          No, cancel
        </Button>
        <Button
          className="modal-delete__button"
          color="red"
          onClick={async () => {
            await deleteComment(commentId);
            const comments = await getComments();
            setComments(comments);
            closeModal();
          }}
        >
          Yes, delete
        </Button>
      </div>
    </Modal>
  );
};

export default ModalDelete;
