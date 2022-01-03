import Text from "../Text";

const Modal = ({ title, children, className = "" }) => {
  return (
    <>
      <div className="modal-bg" />
      <div className="modal">
        <div className={`modal__box ${className}`}>
          <Text className="modal__text" color="dark" isBold>
            {title}
          </Text>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
