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
