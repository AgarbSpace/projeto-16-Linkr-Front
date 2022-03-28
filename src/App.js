import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyled from "./GlobalStyleds/GlobalStyled";
import { AuthProvider } from "./contexts/AuthContext";
import { Hashtag, SignInPage, SignUpPage, TimelinePage } from "./pages";
import { ReloadContextProvider } from "./contexts/ReloadContext";
import SearchBar from "./components/SearchBar";

export default function App() {
  return (
    <AuthProvider>
      <ReloadContextProvider>
        <BrowserRouter>
          <GlobalStyled />
          <Routes>
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/" element={<SignInPage />} />
            <Route path="/timeline" element={<TimelinePage />} />
            <Route path="/hashtag/:hashtag" element={<Hashtag />} />
            <Route path="/user/:id" element={<TimelinePage />} />
          </Routes>
          <SearchBar />
        </BrowserRouter>
      </ReloadContextProvider>
    </AuthProvider>
  );
}

