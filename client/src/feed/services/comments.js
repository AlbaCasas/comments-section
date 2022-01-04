export const getComments = async () => {
  const res = await fetch(`http://localhost:3001/comments`);
  const comments = await res.json();
  return comments;
};

export const deleteComment = async (id) => {
  await fetch(`http://localhost:3001/comments/${id}`, {
    method: "DELETE",
  });
};

export const createComment = async (content) => {
  await fetch(`http://localhost:3001/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: content,
      createdAt: "1 second ago",
      score: 0,
      user: {
        username: "apu",
        image: {
          png: "https://pbs.twimg.com/profile_images/755400180569141249/da18-Djn_400x400.jpg",
        },
      },
    }),
  });
};
