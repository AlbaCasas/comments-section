const TextArea = ({ className = "", ...props }) => {
  return <textarea className={`textArea ${className}`} {...props} />;
};

export default TextArea;
