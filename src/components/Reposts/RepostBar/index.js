import { RepostBar } from "../styled";
import { FiRepeat } from 'react-icons/fi'

export default function RepostsBar({reposterName}) {
  return(
    <RepostBar>
      <FiRepeat/>
      <p>{`Re-posted by`}<span> {reposterName}</span></p>
    </RepostBar>
  )
}