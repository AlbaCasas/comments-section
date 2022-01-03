/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import AddComment from "../feed/components/AddComment";
import Comment from "./components/Comment";
import { FeedContext } from "./FeedContext";
import { getComments } from "./services/comments";
import "./style.scss";

const Feed = () => {
  const [comments, setComments] = useState([]);

  useEffect(async () => {
    const comments = await getComments();
    setComments(comments);
  }, []);

  return (
    <FeedContext.Provider value={{ comments, setComments }}>
      <div>
        {comments.map(({ id, user, content, score, createdAt }) => {
          return (
            <Comment
              userName={user.userName}
              likes={score}
              userPicture={user.image.png}
              createdAt={createdAt}
              key={id}
              id={id}
              className="feed__comment"
            >
              {content}
            </Comment>
          );
        })}
        <AddComment
          className="feed__add-comment"
          userPicture="https://pbs.twimg.com/profile_images/755400180569141249/da18-Djn_400x400.jpg"
        />
      </div>
    </FeedContext.Provider>
  );
};

export default Feed;
