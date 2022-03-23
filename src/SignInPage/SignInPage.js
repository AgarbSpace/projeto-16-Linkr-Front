import axios from "axios";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import Container from "../SignUpPage/Styleds/Container";
import ContainerLogoDescription from "../SignUpPage/Styleds/ContainerLogoDescription";
import FormInputs from '../SignUpPage/Styleds/FormInputs';
import useAuth from '../hooks/useAuth';


export default function SignInPage(){
    const navigate = useNavigate();
    const [signUpForm, setSignUpForm] = useState({
        email: "",
        password: "",
    });
    const { login } = useAuth();
    const [buttonStatus, setButtonStatus] = useState("");

    function controlledInput(e){
        setSignUpForm({...signUpForm, [e.target.name]: e.target.value});
    }

    function signUp(e){
        e.preventDefault();
        const promisse = axios.post("http://localhost:5000/signin",{
            ...signUpForm
        })

        promisse.then(res => {
            login(res.data)
            setButtonStatus("")
            navigate('/timeline')
        })

        promisse.catch(error => {
            alert("Username or password is invalid!");
            setButtonStatus("")
            console.log(error.response.data);
        })
    }

    return (
        <Container>
            <ContainerLogoDescription>
                <h1>linkr</h1>
                <span>save, share and discover the best links on the web</span>
            </ContainerLogoDescription>
            <FormInputs onSubmit = {signUp}>
                <input type = "email" placeholder = "e-mail" name = "email" value = {signUpForm.email} onChange = {controlledInput}/>
                <input type = "password" placeholder = "password" name = "password" value = {signUpForm.password} onChange = {controlledInput}/>
                <button type = "submit" onClick={() => setButtonStatus("loading")}>{buttonStatus === 'loading' ? <ThreeDots type="ThreeDots" color="#000000" height={50} width={50} /> : "Log In"}</button>
                <Link to = "/signup">First time? Create an account!</Link>
            </FormInputs>
        </Container>
    )
}