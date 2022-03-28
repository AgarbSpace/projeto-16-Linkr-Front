import styled from "styled-components";

const PostHeader = styled.div`
    width: 503px;
    display: flex;
    justify-content: space-between;

    margin-bottom: 7px;

    @media(max-width: 630px) {
        width: 100%;
        height: 115px;
        align-items: center;
    }
`

export default PostHeader;