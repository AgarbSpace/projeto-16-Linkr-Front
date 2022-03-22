import RoundImgStyled from "./styled";

function AvatarImg(Props) {

  return (
    <RoundImgStyled
      src={Props.img}
      alt="User Picture"
    />
  )

}

export default AvatarImg