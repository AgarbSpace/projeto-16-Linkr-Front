import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyled from "./GlobalStyleds/GlobalStyled";
import { AuthProvider } from "./contexts/AuthContext";
import SignUpPage from "./SignUpPage/SignUpPage";
import SignInPage from "./SignInPage/SignInPage";
import { Hashtag } from "./pages";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <GlobalStyled />
        <Routes>
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/" element={<SignInPage />} />
          <Route path = "/hashtag/:hashtag" element = {<Hashtag/>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

