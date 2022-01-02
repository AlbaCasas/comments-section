import Likes from "./components/Likes";
import "./style.scss";

const Feed = () => {
  return (
    <div>
      <Likes count={5} />
    </div>
  );
};

export default Feed;
