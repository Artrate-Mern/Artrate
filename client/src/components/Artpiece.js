import axios from "axios";
import { useState, useEffect } from "react";

const baseURL = "http://localhost:3001/artworks"

const Artpiece = () => {
  const [artPiece, setArtPiece] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setArtPiece(response.data);
    });
  }, [])

  if (!artPiece) return null;

  console.log(artPiece);
  
  return(
    <div className="works__artpiece">
      {artPiece.map((piece) => {
        return (
          <>
            <h2>{piece.title}</h2>
            <img src={piece.image} alt={piece.title} />
          </>
        )
      })}
    </div>
  )
}

export default Artpiece;