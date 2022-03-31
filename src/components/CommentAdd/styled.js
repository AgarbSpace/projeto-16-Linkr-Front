import styled from "styled-components";
export const CommentContainer = styled.div`

box-sizing: border-box;

display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;
width: 100%;
gap: 18px;


border-bottom: 1px solid #353535;
padding: 16px 7px;
margin: 10px 10px;

&:first-of-type{
  margin-top: 0px;
}

img{
  width: 39px;
  height: 39px;
  border-radius: 100%;
  object-fit: cover;
}

.input-comment {
    width: 85%;
    height: 39px;
    position: relative;
    background: #252525;
    border: none;
    border-radius: 5px;
    display: flex;
    form {
        width: 100%;
        height: 100%;
    }
}

input {
    width: 94%;
    height: 100%;
    background: #252525;
    border: none;
    border-radius: 5px;
    font-family: 'Lato';
    font-style: italic;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;

    letter-spacing: 0.05em;

    color: #575757;

    padding-left: 4%;

    ::placeholder {
        font-family: 'Lato';
        font-style: italic;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;

        letter-spacing: 0.05em;

        color: #575757;
        padding-left: 4%;
    }
}
input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
}
button {
    position: absolute;
    right: 1%;
    top: 30%;
    background: #252525;
    border: none;
    width: 5%;
}
ion-icon{
    color: #F3F3F3;
    size: 5px;
}
`