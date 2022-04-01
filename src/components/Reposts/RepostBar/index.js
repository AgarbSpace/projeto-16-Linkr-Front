import { RepostBar } from "../styled";
import { FiRepeat } from 'react-icons/fi'
import { useNavigate } from "react-router";

export default function RepostsBar({ reposterName, reposterId }) {

  const navigate = useNavigate()

  function handleClick() {
    navigate(`/user/${reposterId}`)
  }
  return (
    <RepostBar>
      <FiRepeat />
      <p onClick={handleClick}>{`Re-posted by`}<span> {reposterName}</span></p>
    </RepostBar>
  )
}