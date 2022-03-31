import { AiOutlineComment } from "react-icons/ai"
import { CommentButton } from "./styled"

export default function CommentsIcon({ number, onClick }) {

  return (

    <CommentButton onClick={onClick}>
      <AiOutlineComment className="comment-icon" />
      <p>{`${number} comments`}</p>
    </CommentButton >

  )


}