import styled from "styled-components"


const PublishButton = styled.button`
all: unset;
box-sizing: border-box;

width: 112px;
height: 31px;
background: #1877F2;
border-radius: 5px;

font-family: 'Lato';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 17px;
color: #ffffff;

display: flex;
align-items: center;
justify-content: center;
align-self: flex-end;
flex-wrap: wrap;

@media(max-width: 540px) {

  font-size: 13px;
  line-height: 16px;

}

`
export default PublishButton