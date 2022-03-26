import { useEffect, useState } from 'react';
import ReactTooltip from 'react-tooltip';
import checkUserLike from '../../hooks/checkUserLike';
import useAuth from '../../hooks/useAuth';
import api from '../../services/api';
import { LikeButton } from './styled';
export default function Likes({postId}) {
  const { auth } = useAuth()
  const [isLiked, setIsLiked] = useState()
  const [whoLiked, setWhoLiked] = useState()

  useEffect(()=>getLikes(),[])
  async function getLikes() {
    try {
      const { data: list } = await api.getLikes(auth.token,  postId )
      const verification = checkUserLike(list, auth.userId)
      setWhoLiked(list.map(({ name }) => name ))
      setIsLiked(verification)
    } catch (error) {
      console.log(error.response)
    }
  }

  if(!whoLiked && isLiked === undefined) return <p>Loading</p>
  return(
    <>
      <LikeButton  isLiked={isLiked}>
        {
          isLiked ? 
          <ion-icon name="heart"></ion-icon>
          :
          <ion-icon name="heart-outline"></ion-icon>
        }
        <span data-tip data-for="tooltipLikes">{`${whoLiked.length} likes`}</span>
        {whoLiked.length !== 0 && <LoadTooltip whoLiked={whoLiked} isLiked={isLiked}/>}
      </LikeButton>  
    </>
  );
}
function LoadTooltip({whoLiked, isLiked}) {
  return(
    <ReactTooltip id="tooltipLikes" place="bottom" type='light' effect="solid">
    {
      (whoLiked.length === 1 && isLiked) ? 
      <p>{`You`}</p>
      :
      (whoLiked.length === 1 && !isLiked) ? 
      <p>{`${whoLiked[0]}`}</p>
      :
      (whoLiked.length === 2 && isLiked) ? 
      <p>{`You and ${whoLiked[0]}`}</p>
      :
      (whoLiked.length === 2 && !isLiked) ? 
      <p>{`${whoLiked[0]} e ${whoLiked[1]}`}</p>
      :
      (whoLiked.length > 2 && !isLiked) ? 
      <p>{`${whoLiked[0]}, ${whoLiked[1]} e other ${whoLiked.length - 2} people`}</p>
      :
      (whoLiked.length > 2 && isLiked) &&  
      <p>{`You, ${whoLiked[0]} e other ${whoLiked.length - 2} people`}</p>
    }
  </ReactTooltip>
    )
}