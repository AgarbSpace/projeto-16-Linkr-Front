import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import GlobalStyled from "./GlobalStyleds/GlobalStyled";

export default function App(){
    return (
        <BrowserRouter>
            <GlobalStyled/>
            <Routes>
            </Routes>       
        </BrowserRouter>
    )
}