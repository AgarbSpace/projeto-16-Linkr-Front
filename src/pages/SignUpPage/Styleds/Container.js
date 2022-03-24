import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    
    a{
        font-family: 'Lato';
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
        text-decoration: underline;
        color: #FFFFFF;
    }

    @media(max-width: 540px) {
        flex-direction: column;
    }
`

export default Container;