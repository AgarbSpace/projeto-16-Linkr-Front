import styled from "styled-components";

const HeaderTimeline = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    width: 100%;
    margin-bottom: 35px;
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

    @media(max-width: 630px) {
      width: 100vw;
  h2{
    font-weight: 700;
    font-size: 33px;
    line-height: 49px;
  }

  div{
       display: flex;
       gap: 5px;
       align-items: center;
    }


  padding: 0px 15px;

}
`

export default HeaderTimeline;