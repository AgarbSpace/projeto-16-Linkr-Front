import styled from "styled-components";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";

export default function Header() {
  const [isClicked, setIsClicked] = useState(false)
  const [index, setIndex] = useState(-1)
  const [profilePicture, setProfilePicture] = useState()
  const { auth, logout } = useAuth()

  let navigate = useNavigate()

  const wrapperRef = useRef(null)
  useOutsideClick(wrapperRef);
  function useOutsideClick(ref) {
    useEffect(() => {
      function handleClickOutside(e) {
        if (ref.current && !ref.current.contains(e.target) && isClicked)
          handleClickLogout()
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      // Unbind the event listener on clean up
      return () => { document.removeEventListener("mousedown", handleClickOutside) };
    }, [ref, isClicked]);
  }
  function handleClickLogout() {
    if (isClicked) {
      setIsClicked(false)
      setIndex(-1)
    }
    if (!isClicked) {
      setIsClicked(true)
      setTimeout(() => setIndex(500), 300)
    }
  }
  function handleLogout() {
    logout()
    navigate("/")
    window.location.reload()
  }

  useEffect(() => {
    getProfilePicture()
  }, [])

  async function getProfilePicture() {
    try {
      const image = await api.getImageProfile(auth.token)
      setProfilePicture(image.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container isClicked={isClicked}>
      <h1 onClick={() => navigate("/timeline")}>linkr</h1>
      <div ref={wrapperRef} onClick={() => handleClickLogout()}>
        <MdOutlineKeyboardArrowDown />
        <img src={profilePicture} alt="profile_picture" />
        <LogoutButton
          className={isClicked && "allowed"}
          index={index}
          onClick={() => handleLogout()}
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
  position:fixed;
  z-index: 10;

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
    z-index: 5;
  }
  div svg{
    width: 33px;
    height:33px;
    color: #FFFFFF;

    transition: transform .4s;
    transform: rotate(${props => props.isClicked ? "180deg" : "0deg"})
  
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

  position: fixed;
  right: 0px;
  top: 35px;
  opacity: 0;
  &.allowed{
    top: 70px;
    opacity: 1;
  }
  z-index:${props => props.index};


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
  transition: .4s; 
`
