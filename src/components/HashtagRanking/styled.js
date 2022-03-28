import styled from "styled-components"

export const HashtagContainer = styled.section`

box-sizing: border-box;

width: 301px;
height: 406px;

background-color: #171717;
border-radius: 16px;

padding: 10px 0px;

position: sticky;

h1{

  padding: 0px 16px;
  font-family: 'Oswald';
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  line-height: 40px;
  color: #fff;
}

li{
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 19px;
  line-height: 23px;
  letter-spacing: 0.05em;
  color: #FFFFFF;

  padding: 4px 16px;
}

@media(max-width: 540px) {

  display: none;

}

`
export const Line = styled.div`

width: 100%;
height: 1px;
margin: 10px 0px;

background-color: #484848;

`