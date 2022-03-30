import { RepostBar } from "../styled";
import { FiRepeat } from 'react-icons/fi'

export default function RepostsBar() {
  return(
    <RepostBar>
      <FiRepeat/>
      <p>{`Re-posted by`}<span> {`João Amongus`}</span></p>
    </RepostBar>
  )
}