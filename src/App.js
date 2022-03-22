import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import GlobalStyled from "./GlobalStyleds/GlobalStyled";
import SignUpPage from "./SignUpPage/SignUpPage";
import SignInPage from "./SignInPage/SignInPage";

export default function App(){
    return (
        <BrowserRouter>
            <GlobalStyled/>
            <Routes>
                <Route path = "/signup" element = {<SignUpPage/>}/>
                <Route path = "/" element = {<SignInPage/>}/>
            </Routes>       
        </BrowserRouter>
    )
}