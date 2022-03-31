import { CommentsContainer, LayoutDiv, CommentListWrapper } from "./styled";
import CommentItem from "../CommentItem";

function CommentSection({ comments, postOwnerId, isDisplayed }) {

  console.log(comments)

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
    </CommentsContainer>
  )

}

export default CommentSection