import styled from "styled-components"

const Snippet = styled.div`
    width: 98.5%;
    height: 155px;

    display: flex;

    border: 1px solid #4D4D4D;
    border-radius: 11px;

    margin-top: 8px;

    @media(max-width: 630px) {
        width: 86%;
        height: 115px;
        align-items: center;
    }
    @media(max-width: 500px) {
        width: 80%;
        height: 115px;
        align-items: center;
    }
`

export default Snippet;