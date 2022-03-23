import styled from "styled-components";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import img from "../assets/profile_picture.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
export default function Header() {
  const [ isClicked, setIsClicked ] = useState(false)
  const [ index, setIndex ] = useState(-1)
  let navigate = useNavigate()

  const wrapperRef = useRef(null)
  useOutsideClick(wrapperRef);
  function useOutsideClick(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target) && isClicked) {
          handleClickLogout()
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      // Unbind the event listener on clean up
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref,isClicked]);
  }
  function handleClickLogout() {
    if (isClicked){
      setIsClicked(false)
      setIndex(-1)
    } 
    if (!isClicked) {
      setIsClicked(true)
      setTimeout(()=>setIndex(2),300)
    }
  }
  function handleLogout() {
    navigate("/")
    window.location.reload()
  }

  return(
    <Container isClicked={isClicked}>
      <h1 onClick={()=>navigate("/timeline")}>linkr</h1>
      <div ref={wrapperRef} onClick={()=>handleClickLogout()}>
        <MdOutlineKeyboardArrowDown />
        <img src={img} alt="profile_picture"/>
      <LogoutButton 
        className={isClicked&&"allowed"} 
        index={index} 
        onClick={()=>handleLogout()}
        >
        Logout
      </LogoutButton>
      </div>
    </Container>
  )
}
const Container = styled.div`
  width: 100vw;
  height: 72px;
  background: #151515;

  display:flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 17px 0 28px; 
  position:relative;

  h1 {
    font-size: 49px;
    line-height: 54px;
    font-weight: 700;
    font-family: "Passion One";
    letter-spacing: 0.05em;

    color: #ffffff;
  }
  div img {
    width: 53px;
    height: 53px;

    border-radius: 26.5px;
  }
  div svg{
    width: 33px;
    height:33px;
    color: #FFFFFF;

    transition: transform .4s;
    transform: rotate(${props=>props.isClicked ? "180deg": "0deg"})
  
  }
  div{
    width: 90px;
    display:flex;
    justify-content: space-between;
    align-items:center;
  }
  @media (max-width:380px){
    padding: 0 14px 0 17px;
    div{
      width: 75px;
    }
    h1 {
      font-size: 45px;
      line-height: 50px;
    }
    div img {
      width: 44px;
      height: 44px;
    }
    div svg{
      width: 28px;
      height:28px;
    }
  }
`;
const LogoutButton = styled.button`
  all: unset;

  width: 133px;
  height: 47px;

  position: absolute;
  right: 0px;
  bottom: 0px;
  &.allowed{
    bottom: -47px;
  }
  z-index:${props=>props.index};

  background: #171717;
  border-radius: 0px 0px 0px 20px;
  text-align: center;

  font-family: 'Lato';
  font-weight: 700;
  font-size: 17px;
  line-height: 20px;
  letter-spacing: 0.05em;
  
  color: #FFFFFF;
  /* transition: z-index .4s;  */
  transition: bottom  .4s; 
`
