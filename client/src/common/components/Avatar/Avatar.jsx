const Avatar = ({ img, className = "" }) => {
  return <img src={img} alt="Avatar" className={`avatar ${className}`} />;
};

export default Avatar;
