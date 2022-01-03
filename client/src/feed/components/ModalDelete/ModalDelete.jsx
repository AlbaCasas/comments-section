import Modal from "../../../common/components/Modal";
import Text from "../../../common/components/Text";
import Button from "../../../common/components/Button";

const ModalDelete = () => {
  return (
    <Modal title={"Delete comment"} className="modal-delete">
      <Text className="modal-delete__text">
        Are you sure you want to delete this comment? This will remove the
        comment and can't be undone.
      </Text>
      <div className="modal-delete__footer">
        <Button className="modal-delete__button" color="dark">
          No, cancel
        </Button>
        <Button className="modal-delete__button" color="red">
          Yes, delete
        </Button>
      </div>
    </Modal>
  );
};

export default ModalDelete;
