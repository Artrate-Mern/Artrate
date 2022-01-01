import React, { useState, useEffect } from "react";
import axios from "axios";

const baseURL = "http://localhost:3001/artworks";

const Newart = () => {
  const [title, setTitle] = useState("");
  const [filename, setFileName] = useState("");
  const [message, setMessage] = useState("");

  const onChangeFile = (e) => {
    setFileName(e.target.files[0]);
  };
  console.log(title, filename);

  const changeOnClick = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", filename);
    setTitle("");
    axios
      .post(`http://localhost:3001/artworks/new`, formData)
      .then((res) => setMessage(res.data))
      .catch((err) => {
        console.log(err);
      });
  };
  
  return (
    <div>
      <form onSubmit={changeOnClick} encType="multipart/form-data">
        <label htmlFor="title"> Title </label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <label htmlFor="file"> Browse work</label>
        <input
          type="file"
          name="artImage"
          filename="image"
          onChange={onChangeFile}
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default Newart;
