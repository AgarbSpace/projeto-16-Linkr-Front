import { useNavigate } from "react-router-dom";
import ReactHashtag from "@mdnm/react-hashtag";
import { StyledText } from "./styled";

const Hashtags = ({ children }) => {
  let navigate = useNavigate()
  function renderhastag(hashtagValue) {
    let hashtags = hashtagValue.split('#')
    return (
      hashtags.map(result => {
        if (result) {
          return (
            <span onClick={() => navigate(`/hashtag/${result}`)}>
              #{result}
            </span>
          )
        }
        else {
          return ("")
        }
      })
    )
  }
  return (
    <ReactHashtag renderHashtag={(hashtagValue) => renderhastag(hashtagValue)}>
      {children}
    </ReactHashtag>
  )
}

export const Text = ({ children }) => (
  <StyledText>
    <Hashtags>{children}</Hashtags>
  </StyledText>
);
