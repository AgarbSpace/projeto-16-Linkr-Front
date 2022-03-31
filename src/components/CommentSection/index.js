import { CommentsContainer, LayoutDiv, CommentListWrapper } from "./styled";
import CommentItem from "../CommentItem";
import CommentAdd from "../CommentAdd";

function CommentSection({ comments, postOwnerId, isDisplayed, postId, fetchCommentData }) {

  return (
    <CommentsContainer display={isDisplayed}>
      <LayoutDiv />
      <CommentListWrapper>
        {comments.map(el =>
          <CommentItem
            userPicture={el.picture}
            name={el.name}
            commentOwnerId={el.userId}
            followingId={el.followingId}
            postOwnerId={postOwnerId}
            text={el.comment}
          />)}
      </CommentListWrapper>
      <CommentAdd postId={postId} fetchCommentData={fetchCommentData}/>
    </CommentsContainer>
  )

}

export default CommentSection