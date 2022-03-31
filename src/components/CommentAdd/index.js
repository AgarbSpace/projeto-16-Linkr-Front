import { useState } from "react";
import useAuth from "../../hooks/useAuth.js";
import { errServer } from "../../modals/errServer.js";
import api from "../../services/api.js";
import { CommentContainer } from "./styled.js"; 

function CommentAdd({ postId, fetchCommentData }) {
  
  const [comment, setComment] = useState("");

  const { auth } = useAuth();

  function sendComment (e) {
    e.preventDefault();
    const body = { comment };
    api.postComment(auth.token, body, postId)
      .then(() => {
          fetchCommentData();
          setComment("");
      })
      .catch((err) => errServer());
  }


 
  return (
    <CommentContainer>
      <img src={auth.userPicture} alt=""/>
      <div className="input-comment">
        <form onSubmit={sendComment}>
          <input
            placeholder="write a comment..."
            value={comment}
            onChange = {(e) => setComment(e.target.value)}
          ></input>
          <button type="submit"><ion-icon name="send"></ion-icon></button>
        </form>
      </div>
    </CommentContainer>
  )

}

export default CommentAdd