import styled from "styled-components";

const TimelineContainer = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    padding-top: 83px;

    @media(max-width: 630px) {
        width: 100vw;
        padding-top: 150px;
        justify-content: flex-start;
    }
`

export default TimelineContainer;