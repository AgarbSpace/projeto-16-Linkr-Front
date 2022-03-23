import styled from "styled-components"

const InputText = styled.textarea`
all: unset;
box-sizing: border-box;

width: 503px;
height: 66px;

background: #EFEFEF;
border-radius: 5px;

padding: 8px 12px;
margin-bottom:5px;

font-family: 'Lato';
font-style: normal;
font-weight: 300;
font-size: 15px;
line-height: 18px;

color: #949494;

@media(max-width: 540px) {

width: 100%;
height: unset;
min-height: 47px;
padding: 10px 16px;
font-size: 13px;
line-height: 16px;

}

`
export default InputText