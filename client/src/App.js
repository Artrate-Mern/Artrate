import { Route, Routes } from "react-router-dom";
import Landing from "./pages/LandingPage/Landing";
import Artworks from "./pages/ArtworksPage/Artworks";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/artworks" element={<Artworks />} />
    </Routes>
  );
}

export default App;
