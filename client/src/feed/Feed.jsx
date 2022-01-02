import Comment from "./components/Comment";
import "./style.scss";

const Feed = () => {
  return (
    <div>
      <Comment
        userName={"Doctor Professional"}
        userPicture={
          "https://i.pinimg.com/originals/67/5f/bf/675fbf80eabf11721c93f345a156b40f.jpg"
        }
        likes={-200}
        createdAt={"10 years"}
      >
        Woah, your project looks awesome! How long have you been coding for? I'm
        still new, but think I want to dive into React as well soon. Perhaps you
        can give me an insight on where I can learn React? Thanks!
      </Comment>
      <Comment
        userName={"Fren"}
        userPicture={
          "https://pbs.twimg.com/profile_images/755400180569141249/da18-Djn_400x400.jpg"
        }
        likes={100}
        createdAt={"1 second ago"}
      >
        I laik riact fren
      </Comment>
    </div>
  );
};

export default Feed;
