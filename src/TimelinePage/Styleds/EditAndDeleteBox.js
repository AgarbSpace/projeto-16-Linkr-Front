import styled from "styled-components";

const EditAndDeleteBox = styled.div`
    width: 42.5px;

    display: flex;
    justify-content: space-between;

    ion-icon{
        width: 16px;
        height: 16px;
        
        color: #FFFFFF;
    }

    @media(max-width: 630px) {
       display: none;
    }
`

export default EditAndDeleteBox;