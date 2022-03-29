import axios from "axios";
import { useState, useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import { errLogin } from "../../modals/errorLogin";
import api from "../../services/api";

import {
  Container,
  ContainerLogoDescription,
  FormInputs
} from "../SignUpPage/Styleds";


export default function SignInPage() {
  const navigate = useNavigate();
  const [signUpForm, setSignUpForm] = useState({
    email: "",
    password: "",
  });
  const { auth, login } = useAuth();

  useEffect(() => {
    if (auth) {
      navigate("/timeline");
    }
  }, []);

  const [buttonStatus, setButtonStatus] = useState("");

  function controlledInput(e) {
    setSignUpForm({ ...signUpForm, [e.target.name]: e.target.value });
  }

  async function signIn(e) {
    e.preventDefault();

    try {
      const token = await api.signIn(signUpForm)
      login(token.data)
      setButtonStatus("")
      navigate('/timeline')
    } catch (error) {
      errLogin()
      setButtonStatus("")
      console.log(error.response.data)
    }
  }

  return (
    <Container>
      <ContainerLogoDescription>
        <h1>linkr</h1>
        <span>save, share and discover the best links on the web</span>
      </ContainerLogoDescription>
      <FormInputs onSubmit={signIn}>
        <input type="email" placeholder="e-mail" name="email" value={signUpForm.email} onChange={controlledInput} />
        <input type="password" placeholder="password" name="password" value={signUpForm.password} onChange={controlledInput} />
        <button type="submit" onClick={() => setButtonStatus("loading")}>{buttonStatus === 'loading' ? <ThreeDots type="ThreeDots" color="#000000" height={50} width={50} /> : "Log In"}</button>
        <Link to="/signup">First time? Create an account!</Link>
      </FormInputs>
    </Container>
  )
}