import styled from "styled-components";

const ContentBox = styled.div`
    width: 502px;
    height: 237px;
    
    font-family: 'Lato';

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 18px;
    
    a, h1{
        font-size: 19px;
        font-style: normal;
        font-weight: 400;
        line-height: 23px;
        letter-spacing: 0em;
        text-align: left;
        text-decoration: none;
        color: #FFFFFF;

        :hover{
            text-decoration: underline;
        }

    }

    span{
        font-size: 17px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: left;
        color: #B7B7B7;
    }

    @media(max-width: 630px) {
        width: 100%;
        min-width: 128px;
        height: 115px;
        padding-right: 5px;

        a{

          font-family: 'Lato';
          font-style: normal;
          font-weight: 400;
          font-size: 17px;
          line-height: 20px;

          color: #FFFFFF;
        }   

        span{
            width: 87%;
            font-size: 15px;
            font-style: normal;
            font-weight: 700;
            line-height: 18px;
            letter-spacing: 0em;
            text-align: left;
        }

    }
`
export default ContentBox;