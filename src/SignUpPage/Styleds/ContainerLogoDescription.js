import styled from "styled-components";

const ContainerLogoDescription = styled.div`
    width: 62.8%;
    height: 100%;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 15.9%;
    padding-bottom: 15%;

    background-color: #000000;

    h1{
        font-family: 'Passion One';
        font-size: 106px;
        font-style: normal;
        font-weight: 700;
        line-height: 117px;
        letter-spacing: 0.05em;
        text-align: left;
        color: #FFFFFF
    }

    span{
        width: 48.8%;
        height: 128px;

        font-family: 'Oswald';
        font-size: 43px;
        font-style: normal;
        font-weight: 700;
        line-height: 64px;
        letter-spacing: 0em;
        text-align: left;
        color: #FFFFFF
    }

    @media(max-width: 540px) {
        width: 100%;
        height: 26.2%;
        align-items: center;
        padding-left: 0;
        padding-bottom: 0;
        padding-top: 3%;
        h1{
            font-size: 76px;
            line-height: 76px;
        }

        span{
            width: 70%;
            height: 68px;
            font-size: 23px;
            line-height: 34px;
            text-align: center;

        }
    }

    @media(min-width: 1100px) {
        padding-bottom: 10%;
    }

    @media(max-width: 330px) {

        h1{
            font-size: 60px;
            line-height: 60px;
        }

        span{
            font-size: 20px;
        }
    }

    @media(max-width: 280px) {

        h1{
            font-size: 55px;
            line-height: 55px;
        }

        span{
            font-size: 17px;
        }
    }
`

export default ContainerLogoDescription;