import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { LogoutButton, Container } from "./styled";


export default function Header() {
  const [isClicked, setIsClicked] = useState(false)
  const [index, setIndex] = useState(-1)
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
      // eslint-disable-next-line
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


  return (
    <Container isClicked={isClicked}>
      <h1 onClick={() => navigate("/timeline")}>linkr</h1>
      <div ref={wrapperRef} onClick={() => handleClickLogout()}>
        <MdOutlineKeyboardArrowDown />
        <img src={auth.userPicture} alt="profile_picture" />
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
