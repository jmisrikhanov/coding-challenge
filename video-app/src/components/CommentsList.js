import React from "react";
const CommentsList = ({ items }) => {
  return (
    <div className="comments-list">
      {" "}
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article key={id} className="comments-item">
            <p className="comment-title">{title}</p>
          </article>
        );
      })}
    </div>
  );
};

export default CommentsList;
