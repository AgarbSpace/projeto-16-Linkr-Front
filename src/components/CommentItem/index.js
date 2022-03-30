import { CommentItemContainer } from "./styled"

export default function CommentItem({ userPicture, name, commentOwnerId, followingId, postOwnerId, text }) {

  let commentOwnerInfo = ""

  if (followingId) {
    commentOwnerInfo = "• following"
  }

  if (commentOwnerId === postOwnerId) {
    commentOwnerInfo = "• post’s author"
  }

  return (

    <CommentItemContainer>
      <img src={userPicture} alt={name} />
      <div className="comment-text-wrapper">
        <div className="comment-user-info"><h1>{name}</h1><p>{commentOwnerInfo}</p></div>
        <p>{text}</p>
      </div>
    </CommentItemContainer >

  )


}