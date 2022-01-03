import Text from "../Text";

const Modal = ({ title, children, className = "", closeModal }) => {
  return (
    <>
      <div className="modal-bg" />
      <div className="modal" onClick={closeModal}>
        <div
          className={`modal__box ${className}`}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <Text className="modal__text" isBold>
            {title}
          </Text>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
