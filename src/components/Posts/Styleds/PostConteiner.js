import styled from "styled-components";

const PostConteiner = styled.div`
    width: 611px;
    min-height: 276px;
    position: relative;

    display: flex;
    padding-top: 10px;
    padding-left: 18px;
    margin-bottom: 70px;
    background-color: #171717;

    border-radius: 16px;

    

    @media(max-width: 630px) {
        width:100vw;
        height: 232px;
        border-radius: unset;

    }

`
export default PostConteiner;