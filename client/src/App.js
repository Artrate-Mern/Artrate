import { Route, Routes } from "react-router-dom";
import Landing from "./pages/LandingPage/Landing";
import Artworks from "./pages/ArtworksPage/Artworks";
import Newart from "./components/Newart";
import "./App.css";
import ArtList from "./components/ArtList";

function App() {
  return (
    <>
      {/* <ArtList/> */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/works" element={<Artworks />} />
        <Route path="/post" element={<Newart />} />
      </Routes>
    </>
  );
}

export default App;
