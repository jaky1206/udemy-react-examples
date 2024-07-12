import { useState } from "react";
import { Link } from "react-router-dom";

import classes from "./NewPost.module.css";
import Modal from "../src/components/Modal";

function NewPost({ onAddPost }) {
  const [enteredBody, setEnteredBody] = useState("ReactJS is awesome!");
  const [enteredAuthor, setEnteredAuthor] = useState("Maximillian");

  function bodyChaneHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      body: enteredBody,
      author: enteredAuthor,
    };
    onAddPost(postData);
  }

  return (
    <Modal>
      <form className={classes.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={bodyChaneHandler} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            required
            onChange={authorChangeHandler}
          />
        </p>
        <p className={classes.actions}>
          <Link to=".." type="button">
            Cancel
          </Link>
          <button type="submit">Submit</button>
        </p>
      </form>
    </Modal>
  );
}

export default NewPost;
