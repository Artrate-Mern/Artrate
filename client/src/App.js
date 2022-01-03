import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/LandingPage/Landing";
import Artworks from "./pages/ArtworksPage/Artworks";
import PostArt from "./pages/PostArtPage/PostArt"
import SignUp from "./pages/SignUpPage/SignUp";
import NavBar from "./components/NavBar";
import "./App.css";
import ArtList from "./components/ArtList";

function App() {
  return (
    <>
      <NavBar />
      {/* <ArtList/> */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/works" element={<Artworks />} />
        <Route path="/post" element={<PostArt />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
