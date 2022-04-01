import styled from "styled-components"

const NewPostNotificationStyled = styled.button`


box-sizing: border-box;

display: flex;
align-items: center;
justify-content: center;

gap: 18px;

width: 611px;
height: 61px;
padding: 16px 22px 16px 18px;
margin-top: 0px;
margin-bottom: 20px;
position: relative;
top: -20px;

font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;

color: #FFFFFF;



background: #1877F2;

box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

border: none;
border-radius: 16px;




@media(max-width: 540px) {

  width: 100vw;
  height: unset;
  border-radius: unset;
  padding: 10px 16px;

}

`

const ReloadIcon = styled.div`


`

export {
  NewPostNotificationStyled,
  ReloadIcon,
}