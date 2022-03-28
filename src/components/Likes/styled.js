import styled from "styled-components";
export const LikeButton = styled.div`
display: flex;
flex-direction: column;
ion-icon{
        width: 25px;
        height: 25px;
        color: ${({isLiked})=> isLiked ? "#AC0000" :"#FFFFFF"};
      }

      span{
        font-family: 'Lato';
        font-size: 11px;
        font-style: normal;
        font-weight: 400;
        line-height: 13px;
        letter-spacing: 0em;
        text-align: center;
        color: #FFFFFF;
    }
`