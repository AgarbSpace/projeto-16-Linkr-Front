import styled from "styled-components";

const Post = styled.div`
    width: 611px;
    height: 276px;

    display: flex;
    padding-top: 10px;
    padding-left: 18px;
    margin-top: 29px;

    background-color: #171717;

    border-radius: 16px;

    @media(max-width: 630px) {
        width:100vw;
        height: 232px;
        border-radius: unset;

    }

`
export default Post;