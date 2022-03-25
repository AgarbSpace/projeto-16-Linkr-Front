import styled from "styled-components"

const Snippet = styled.div`
    width: 98.5%;
    height: 155px;

    display: flex;

    border: 1px solid #4D4D4D;
    border-radius: 11px;

    margin-top: 8px;

    @media(max-width: 630px) {
      box-sizing:border-box;
        width: calc(100% - 18px);

        align-items: center;
    }
`

export default Snippet;