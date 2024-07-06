import { useState } from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";

import classes from "./PostsList.module.css";

function PostsList({IsPosting, onStopPosting}) {
  
  const [enteredBody, setEnteredBody] = useState("ReactJS is awesome!");
  const [enteredAuthor, setEnteredAuthor] = useState("Maximillian");

  function bodyChaneHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  

  // let modalContent;

  // if (modalIsVisible) {
  //   modalContent = (
  //     <Modal onClose={hideModelHandler}>
  //       <NewPost
  //         onBodyChange={bodyChaneHandler}
  //         onAuthorChange={authorChangeHandler}
  //       />
  //     </Modal>
  //   );
  // }

  return (
    <>
      {IsPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            onBodyChange={bodyChaneHandler}
            onAuthorChange={authorChangeHandler}
            onCancel={onStopPosting}
          />
        </Modal>
      )}

      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Manuel" body="Check out the full course!" />
      </ul>
    </>
  );
}

export default PostsList;
