import styled from "styled-components";

const TimelineContainer = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    padding-top: 5%;

    @media(max-width: 630px) {
        width: 97%;
        justify-content: flex-start;
    }
`

export default TimelineContainer;