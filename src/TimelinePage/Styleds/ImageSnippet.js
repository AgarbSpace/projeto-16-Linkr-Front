import styled from "styled-components";

const ImageSnippet = styled.img`
    width: 144.44px;
    height: 155px;
    border-top-right-radius: 11px;
        border-bottom-right-radius: 11px;

    :hover{
        cursor: pointer;
    }

    @media(max-width: 630px) {
        width: 95px;
        height: 115px;
        object-fit: fit;
        border-radius: unset;
        border-top-right-radius: 11px;
        border-bottom-right-radius: 11px;
    }
`
export default ImageSnippet;