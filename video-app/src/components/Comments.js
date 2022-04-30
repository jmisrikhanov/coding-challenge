import React, { useState } from "react";
import CommentsList from "./CommentsList";

function Comments() {
  const [name, setName] = useState("");
  const [list, setList] = useState("");
  const [isOff, setIsOff] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("PLease enter a comment");
    } else {
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };

  const handleOff = () => setIsOff((prev) => !prev);
  const handleName = (e) => setName(e.target.value);

  return (
    <div className="section-center">
      <button className="btn btn-primary form-control" onClick={handleOff}>
        {isOff ? "Show Comments" : "Hide Comments"}
      </button>
      {!isOff && (
        <section>
          <form className="comments-form" onSubmit={handleSubmit}>
            <div className="form-control">
              <input
                type="text"
                className="comments"
                placeholder="Add a comment..."
                value={name}
                onChange={handleName}
              />
              <button type="submit" className="submit-btn">
                submit
              </button>
            </div>
          </form>
          {list.length > 0 && (
            <div className="comments-container">
              <CommentsList items={list} />
            </div>
          )}
        </section>
      )}
    </div>
  );
}

export default Comments;
