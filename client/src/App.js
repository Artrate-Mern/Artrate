import { Route, Routes } from "react-router-dom";
import Landing from "./pages/LandingPage/Landing";
import Artworks from "./pages/ArtworksPage/Artworks";
import PostArt from "./pages/PostArtPage/PostArt"
import SignUp from "./pages/SignUpPage/SignUp";
import "./App.css";

function App() {
  return (
    <>
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
