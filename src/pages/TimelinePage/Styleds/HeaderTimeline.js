import styled from "styled-components";

const HeaderTimeline = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    width: 100%;
    div{
       display: flex;
       gap: 20px;
       align-items: center;
    }
    h2{
        padding-top: 40px;
    }
    img{
        width: 50px;
        height: 50px;
        border-radius:26.5px;
    }
`

export default HeaderTimeline;