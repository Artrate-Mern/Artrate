import { useState } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const FeedbackForm = () => {
  const [ratingValue, setRatingValue] = useState(1);
  const [feedbackValue, setFeedbackValue] = useState('');

  const handleFeedbackChange = (event) => {
    setFeedbackValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedFeedback = feedbackValue.trim();
    if (!trimmedFeedback) {
      return console.log("You must add text to submit feedback.")
    };

    console.log(ratingValue);
    console.log(feedbackValue);

    setRatingValue(1);
    setFeedbackValue('');
  }

  return(
    <form onSubmit={handleSubmit} >
      
      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: 'minmax(450px, 650px)', 
        justifyContent: 'center',
        gap: 5,
        my: 4,
        }}>

        {/* Star rating */}
        <Box
          sx={{
            '& > legend': { mt: 1 },
          }}
        >
          <Typography component="legend">Rating</Typography>
          <Rating
            name="simple-controlled"
            value={ratingValue}
            onChange={(event, newValue) => {
              setRatingValue(newValue);
            }}
          />
        </Box>

        {/* Feedback */}
        <Box
          sx={{
            '& .MuiTextField-root': { width: '100%'},
          }}
          noValidate
          autoComplete="off"
        >
          <Typography component="legend">Feedback</Typography>
          <TextField
            id="filled-multiline-static"
            label="How can I improve?"
            multiline
            rows={4}
            variant="filled"
            onChange={handleFeedbackChange}
          />
        </Box>
        <Button type="submit" variant="contained" sx={{ width: "125px", py: 1, borderRadius: "50px", margin: "auto", mb: 1 }}>Submit</Button>
      </Box>
    </form>
  )
}

export default FeedbackForm;