import { AiOutlineComment } from "react-icons/ai"
import { CommentButton } from "./styled"

export default function CommentsIcon({ number }) {


  return (

    <CommentButton>
      <AiOutlineComment className="comment-icon" />
      <p>{`${number} comments`}</p>
    </CommentButton >

  )


}