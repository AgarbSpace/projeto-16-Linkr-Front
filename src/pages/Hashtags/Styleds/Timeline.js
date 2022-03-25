import styled from "styled-components";

const Timeline = styled.section`
    width: 611px;

    h2{
            font-family: 'Oswald';
            font-size: 43px;
            font-style: normal;
            font-weight: 700;
            letter-spacing: 0em;
            text-align: left;
            color: #FFFFFF;

            margin-bottom: 43px;
        }

    @media(max-width: 630px) {
        h2{
            padding-left: 27px;
        }
    }
    @media(max-width: 380px) {
        h2{
            padding-left: 17px;
        }
    }
`

export default Timeline;