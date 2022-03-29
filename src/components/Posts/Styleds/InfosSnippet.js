import styled from "styled-components";

const InfosSnippet = styled.div`
    width: 69.4%;
    height: 155px;

    display: flex;
    flex-direction: column;

    align-items: flex-start;
    padding-left: 19px;
    padding-top: 24px;

    padding-bottom: 5px;

    font-family: 'Lato';
    
    a:first-child{
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: left;
        color: #CECECE;

        margin-bottom: 5px;

        :hover{
            text-decoration: underline;
            cursor: pointer;
        }
    }

    span {
        font-size: 11px;
        font-style: normal;
        font-weight: 400;
        line-height: 13px;
        letter-spacing: 0em;
        text-align: left;
        color: #9B9595;

        margin-bottom: 13px;

        overflow: hidden;
        text-overflow: ellipsis;
        
    }

    a{
        font-size: 11px;
        font-style: normal;
        font-weight: 400;
        line-height: 13px;
        letter-spacing: 0em;
        text-align: left;
        color: #CECECE;

        padding-right: 15px;
        word-break: break-all;
        overflow: hidden;
        text-overflow: ellipsis;



        :hover{
            cursor: pointer;
        }
    }

    @media(max-width: 630px) {
        width: 100vw;
        height: 115px;
        border-radius: unset;
        padding-top: 10px;

        a:first-child{
            font-size: 11px;
            font-style: normal;
            font-weight: 400;
            line-height: 13px;
            letter-spacing: 0em;
            text-align: left;

        color: #CECECE;

        margin-bottom: 5px;

        :hover{
            text-decoration: underline;
            cursor: pointer;
        }
    }

    span {
        font-size: 9px;
        font-style: normal;
        font-weight: 400;
        line-height: 11px;
        letter-spacing: 0em;
        text-align: left;

        color: #9B9595;

        margin-bottom: 13px;
    }

    a{
        font-size: 9px;
        font-style: normal;
        font-weight: 400;
        line-height: 11px;
        letter-spacing: 0em;
        text-align: left;

        color: #CECECE;

        :hover{
            cursor: pointer;
        }
    }
    }
`

export default InfosSnippet;