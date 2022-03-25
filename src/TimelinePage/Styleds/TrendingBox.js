import styled from "styled-components";

const TrendingBox = styled.section`
    width: 301px;
    height: 406px;

    border-radius: 16px;

    margin-top: 86px;
    margin-left: 25px;

    h1{
        font-family: 'Oswald';
        font-size: 27px;
        font-style: normal;
        font-weight: 700;
        line-height: 40px;
        letter-spacing: 0em;
        text-align: left;
        color: #FFFFFF;

        margin-left: 16px;
    }

    hr{
        height: 1px;
        background-color: #484848;
    }

    li{
        font-family: 'Lato';
        font-size: 19px;
        font-style: normal;
        font-weight: 700;
        line-height: 23px;
        letter-spacing: 0.05em;
        text-align: left;
        color: #FFFFFF;

        margin-left: 16px;
    }

    @media(max-width: 1024px) {
        display: none;
    }
`

export default TrendingBox;