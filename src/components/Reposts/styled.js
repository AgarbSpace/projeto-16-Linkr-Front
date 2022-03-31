import styled from "styled-components";

export const RepostsIconsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  svg{
    color: #FFFFFF;
    width: 23px;
    height: 23px;
  }
  p{
    font-family: 'Lato';
    font-size: 11px;
    line-height: 13px;
    text-align: center;

    color: #FFFFFF;
  }
`
export const RepostBar = styled.div`
  width: 611px;
  height: 60px;

  display:flex;
  gap: 6px;
  padding: 9px 13px;

  position: absolute;
  top: -33px;
  left: 0;

  z-index: -1;

  background: #1E1E1E;
  border-radius: 16px;
  svg{
    color: #FFFFFF;
    width: 18px;
    height: 18px;
  }
  p{
    font-family: 'Lato';
    font-size: 11px;
    line-height: 13px;
    text-align: center;
    color: #FFFFFF;
  }
  span{
    font-weight: bold;
  }
  @media(max-width: 630px) {
      width:100vw;
      border-radius: unset;
  }
`
