import React, { useState } from "react";
import axios from "axios";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import Typography from '@mui/material/Typography';
import FormHelperText from '@mui/material/FormHelperText';

const Input = styled('input')({
  display: 'none',
});

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [filename, setFileName] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const onChangeFile = (e) => {
    setFileName(e.target.files[0]);
  };

  const changeOnClick = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", filename);
    formData.append("description", description);

    axios
      .post(`http://localhost:3001/artworks/new`, formData)
      .then((res) => setMessage(res.data))
      .catch((err) => {
        console.log(err);
      });

    setTitle("");
    setFileName("");
    setDescription("");

  };
  
  return (
    <div>
      <form onSubmit={changeOnClick} encType="multipart/form-data">
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: 'minmax(450px, 650px)', 
          justifyContent: 'center',
          gap: 5,
          my: 4,
          }}>

          <TextField 
            id="outlined-basic" 
            label="Name" 
            variant="outlined"
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Give it a name"
          />

          <Box sx={{backgroundColor: "#E2F6FF", p: 3}}>
            <label htmlFor="contained-button-file">
            <Typography>
              <em>Browse files to upload your work.</em>
              <br />
              {filename && filename.name}
            </Typography>
            <Input 
              accept="image/*" 
              id="contained-button-file" 
              type="file"
              name="artImage" 
              filename="image"
              onChange={onChangeFile}
            />
            <Button variant="contained" component="span" sx={{backgroundColor: "#4FA5C9"}}>
              Browse
            </Button>
          </label>
          </Box>

            <TextField
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={4}
              name="description"
              value={description}
              placeholder="Description of art piece"
              onChange={(e) => setDescription(e.target.value)}
              helperText="Maximum characters: 300"
            />

            <Button type="submit" variant="contained" sx={{backgroundColor: "#19324B", width: "125px", py: 1, margin: "auto"}}>
              Post
            </Button>
        
        </Box>
      </form>
    </div>
  );
};

export default PostForm;
