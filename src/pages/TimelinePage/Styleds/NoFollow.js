import styled from "styled-components";

const NoFollow = styled.div`
    width: 100%;
    height: 23px;

    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    
    margin-top: 15px;

    span{
        font-family: 'Oswald';
        font-size: 23px;
        font-style: normal;
        font-weight: 700;
        line-height: 40px;
        letter-spacing: 0em;
        text-align: left;
        color: #B7B7B7;

    }
    @media(max-width: 600px) {
        height: 46px;
    }
    @media(max-width: 380px) {
        height: 60px;
    }
`

export default NoFollow;