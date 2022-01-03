/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import AddComment from "../feed/components/AddComment";
import Comment from "./components/Comment";
import "./style.scss";

const Feed = () => {
  const [comments, setComments] = useState([]);

  useEffect(async () => {
    const res = await fetch("http://localhost:3001/comments");
    const data = await res.json();
    setComments(data);
  }, []);

  return (
    <div>
      {comments.map(({ id, user, content, score, createdAt }) => {
        return (
          <Comment
            userName={user.username}
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
  );
};

export default Feed;
