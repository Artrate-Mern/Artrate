import PostForm from "../../components/PostForm"
import Typography from "@mui/material/Typography";

const PostArt = () => {
  return (
    <div id="post-art">
      <Typography variant="h1" component="div" gutterBottom sx={{ textAlign: "center" }}>
        Upload your work
      </Typography>
      <PostForm />
    </div>
  )
}

export default PostArt;