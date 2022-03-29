import { AiOutlineComment } from "react-icons/ai"
import { CommentButton } from "./styled"

export default function CommentsIcon({ number, onClick }) {

  if (number === 0) {
    return (

      <CommentButton>
        <AiOutlineComment className="comment-icon" />
        <p>{`${number} comments`}</p>
      </CommentButton >

    )
  }

  return (

    <CommentButton onClick={onClick}>
      <AiOutlineComment className="comment-icon" />
      <p>{`${number} comments`}</p>
    </CommentButton >

  )


}