import styled from "styled-components";

const ImageSnippet = styled.img`
    width: 144.44px;
    height: 155px;

    :hover{
        cursor: pointer;
    }

    @media(max-width: 630px) {
        height: 115px;
        border-radius: unset;
    }
`
export default ImageSnippet;