import React,{useState,useEffect} from 'react';
import axios from 'axios';
const baseURL = "http://localhost:3001/artworks";
const ArtList = (props) => {
  const [arts, setArts] = useState([]);
  useEffect(() => {
    
    axios.get(baseURL)
      .then(res => setArts(res.data))
  }, []);
  return (
    <div>
      <div className="Art-list">
        {arts.map((art, index) => (
          <div key={index}>
            {art.title}
            <img src={`/uploads/${art.image}`} alt="art" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtList;