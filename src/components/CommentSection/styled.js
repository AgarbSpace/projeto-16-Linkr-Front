import styled from "styled-components";

const CommentsContainer = styled.section`

width: 611px;
background-color: #1E1E1E;
border-radius: 16px;
position: relative;
top: -127px;

${props => props.display ? "" : "display: none"};

@media(max-width: 630px) {
  top: -83px;
  width:100vw;
  border-radius: unset;
  -webkit-box-shadow: inset 0px 11px 20px -9px #000000; 
  box-shadow: inset 0px 11px 20px -9px #000000;

}


`

const LayoutDiv = styled.div`

height: 32px;
background-color: #171717;
border-radius: 16px;

@media(max-width: 630px) {
        display: none;

    }

`

const CommentListWrapper = styled.div`

display: flex;
justify-content: center;
flex-direction: column;


`

export {
  CommentsContainer,
  LayoutDiv,
  CommentListWrapper,
}