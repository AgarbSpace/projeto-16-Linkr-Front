import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyled from "./GlobalStyleds/GlobalStyled";
import { AuthProvider } from "./contexts/AuthContext";
import { Hashtag, SignInPage, SignUpPage } from "./pages";
import TimelinePage from "./TimelinePage/TimelinePage";
import SearchBar from "./components/SearchBar";
import { ReloadContextProvider } from "./contexts/ReloadContext";

export default function App() {  
  return (
    <AuthProvider>
      <ReloadContextProvider>
        <BrowserRouter>
          <GlobalStyled />
          <SearchBar />
          <Routes>
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/" element={<SignInPage />} />
            <Route path="/timeline" element={<TimelinePage />}  />
            <Route path="/hashtag/:hashtag" element={<Hashtag />} />
            <Route path="/user/:id" element={<TimelinePage />}/>
          </Routes>
        </BrowserRouter>
      </ReloadContextProvider>
    </AuthProvider>
  );
}

