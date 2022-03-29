import styled from "styled-components";
export const CommentItemContainer = styled.div`

box-sizing: border-box;

display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;
width: 100%;
gap: 18px;


border-bottom: 1px solid #353535;
padding: 16px 7px;
margin: 10px 20px;

&:first-of-type{
  margin-top: 0px;
}

.comment-user-info{
  display: flex;
  flex-direction: row;

  h1{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #F3F3F3;
  }
  p{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #565656;
  }
}

.comment-text-wrapper{
  display: flex;
  flex-direction: column;
}

img{
  width: 39px;
  height: 39px;
  border-radius: 100%;
  object-fit: cover;
}

p{

  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #ACACAC;


}
`