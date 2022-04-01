import styled from "styled-components"

const PublishBoxStyled = styled.form`



box-sizing: border-box;

display: flex;
gap: 18px;

width: 611px;
height: 209px;

padding: 16px 22px 16px 18px;

background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 16px;

margin-bottom: 70px;

h1{
font-family: 'Lato';
font-style: normal;
font-weight: 300;
font-size: 20px;
line-height: 24px;

color: #707070;

margin-bottom:12px;

}

.publish-box-wrapper{
  display: flex;
  width:100%;
  height:100%;

  display: flex;
flex-direction: column;
align-items: flex-start;
}

pointer-events: ${props => props.isLoading ? "none" : "unset"};


@media(max-width: 540px) {

  width: 100vw;
  height: unset;
  border-radius: unset;
  padding: 10px 16px;

  h1{
    font-weight: 300;
    font-size: 17px;
    line-height: 20px;
    text-align: center;
    align-self: center;
  }

  &>img{
    display: none;
  }
}

`

export default PublishBoxStyled