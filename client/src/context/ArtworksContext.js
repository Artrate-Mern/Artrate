import { createContext, useState, useEffect } from "react";
import axios from "axios";

const baseURL = "http://localhost:3001/artworks";

export const ArtworksContextData = createContext(null);

export const ArtworksContext = ({ children }) => {
  const [artworks, setArtworks] = useState('');

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setArtworks(response.data)
        console.log('hello')
      })
  }, [])

  console.log('ArtworksContext.js ', artworks)

  return(
    <ArtworksContextData.Provider
      value={artworks}>
      {children}
    </ArtworksContextData.Provider>
  )
}