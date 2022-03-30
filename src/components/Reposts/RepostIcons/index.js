import { RepostsIconsContainer } from "../styled";
import { FiRepeat } from 'react-icons/fi'

export default function RepostsIcons() {
  const arrayRePosts = [1,3,3]
  return(
    <RepostsIconsContainer>
      <FiRepeat/>
      <p><span>{arrayRePosts.length}</span>{arrayRePosts.length === 1 ? ` re-post`: ` re-posts`}</p>
    </RepostsIconsContainer>
  )
}
