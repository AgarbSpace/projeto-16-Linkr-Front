import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import GlobalStyled from "./GlobalStyleds/GlobalStyled";
import SignUpPage from "./SignUpPage/SignUpPage";
import TimelinePage from "./TimelinePage/TimelinePage";

export default function App(){
    return (
        <BrowserRouter>
            <GlobalStyled/>
            <Routes>
                <Route path = "/signup" element = {<SignUpPage/>}/>
                <Route path = "/timeline" element = {<TimelinePage/>}/>
            </Routes>       
        </BrowserRouter>
    )
}