import { useEffect, useState } from 'react';
import ReactTooltip from 'react-tooltip';
import styled from 'styled-components';
import useAuth from '../../hooks/useAuth';
import api from '../../services/api';
export default function Likes({postId}) {
  const { auth } = useAuth()
  console.log(postId)
  const [isLiked, setIsLiked] = useState(true)

  const arrayLikers = ["Fael","Alan", "DEB", "LH", "JP"]

  useEffect(()=>{
    getLikes()
  },[])
  async function getLikes() {
    try {
      const { data: list } = await api.getLikes(auth.token,  postId )
      console.log("teste", list)
    } catch (error) {
      console.log(error.response)
    }
  }
  
  return(
    <>
      <LikeButton data-tip data-for="tooltipLikes" isLiked={isLiked}>
        {
          isLiked ? 
          <ion-icon name="heart"></ion-icon>
          :
          <ion-icon name="heart-outline"></ion-icon>
        }
        <span>{`${arrayLikers.length} likes`}</span>
      </LikeButton>  
      <ReactTooltip id="tooltipLikes" place="bottom" type='light' effect="solid">
        {
          isLiked ? 
          <p>{`Você, ${arrayLikers[0]} e outras ${arrayLikers.length - 2} pessoas`}</p>
          :
          <p>{`${arrayLikers[0]}, ${arrayLikers[1]} e outras ${arrayLikers.length - 2} pessoas`}</p>
        }
      </ReactTooltip>
    </>
  );
}
const LikeButton = styled.div`
display: flex;
flex-direction: column;
ion-icon{
        width: 25px;
        height: 25px;
        color: ${({isLiked})=> isLiked ? "#AC0000" :"#FFFFFF"};
      }

      span{
        font-family: 'Lato';
        font-size: 11px;
        font-style: normal;
        font-weight: 400;
        line-height: 13px;
        letter-spacing: 0em;
        text-align: center;
        color: #FFFFFF;
    }
`