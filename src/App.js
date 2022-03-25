import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyled from "./GlobalStyleds/GlobalStyled";
import { AuthProvider } from "./contexts/AuthContext";
import { Hashtag, SignInPage, SignUpPage } from "./pages";
import TimelinePage from "./TimelinePage/TimelinePage";
import SearchBar from "./components/SearchBar";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <GlobalStyled />
        <SearchBar />
        <Routes>
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/" element={<SignInPage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/hashtag/:hashtag" element={<Hashtag />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

