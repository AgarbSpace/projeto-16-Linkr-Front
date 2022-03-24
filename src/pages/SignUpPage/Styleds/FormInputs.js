import styled from "styled-components";

const FormInputs = styled.form`
    width: 37.1%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 13px;

    input{
        width: 80.1%;
        height: 65px;

        display: flex;
        align-items: center;

        background-color: #FFFFFF;

        border: none;
        border-radius: 6px;

        pointer-events: ${props => props.status === "loading" ? "none" : "visible"};
        outline: ${props => props.status === "loading" ? "none" : "0px"};
        opacity: ${props => props.status === "loading" ? "0.8" : "1"};
        
        :hover{
            cursor: ${props => props.status === "loading" ? "not-allowed" : "default"};
        }

        ::placeholder{
            font-family: 'Oswald';
            font-size: 27px;
            font-style: normal;
            font-weight: 700;
            line-height: 40px;
            letter-spacing: 0em;
            text-align: left;
            color: #9F9F9F;
            
            padding-left: 17px;
        }

    }

    button{
        width: 80.1%;
        height: 65px;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: #1877F2;

        border: none;
        border-radius: 6px;

        font-family: 'Oswald';
        font-size: 27px;
        font-style: normal;
        font-weight: 700;
        letter-spacing: 0em;
        text-align: left;
        color: #FFFFFF;
        opacity: ${props => props.status === "loading" ? "0.8" : "1"};
        
        :hover{
            cursor: ${props => props.status === "loading" ? "not-allowed" : "default"};
        }
    }

    @media(max-width: 540px) {
        width: 100%;
        height: 73.8%;
        
        justify-content: flex-start;
        padding-top: 10%;
        gap: 3.5%;

        input{
            width: 88%;
            height: 55px;
        }

        button{
            width: 88%;
            height: 55px;
        }
    }
`

export default FormInputs;