import axios from "axios";
import React, { useState, useEffect } from "react";
import FeedbackForm from "./FeedbackForm";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";

const baseURL = "http://localhost:3001/artworks";

const Artpiece = () => {
  const [artPiece, setArtPiece] = useState(0);

  const [activeStep, setActiveStep] = useState(0);
  const theme = useTheme();
  
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setArtPiece(response.data);
    });
  }, [])
  
  const maxSteps = artPiece.length;
  
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };


  if (!artPiece) return null;

  let artpieceName = artPiece[activeStep].title;
  let artpieceId = artPiece[activeStep]['_id'];
  
  return(
    <div id="artpiece">
      <Box sx={{ maxWidth: 650, flexGrow: 1, margin: "auto", boxShadow: 3, p: 4 }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: 50,
            bgcolor: 'background.default',
            pl: 3,
          }}
        >
          <Typography>{artPiece[activeStep].title}</Typography>
        </Paper>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {artPiece.map((step, index) => (
            <div key={step._id}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: 650,
                    objectFit: "contain",
                    display: 'block',
                    maxWidth: 650,
                    overflow: 'hidden',
                    width: '100%',
                  }}

                  // FIXME  
                  src={`/uploads/${step.image}`}
                  alt={step.title}
                />
              ) : null}
            </div>
          ))}
        </SwipeableViews>

        <Paper
          square
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            bgcolor: 'background.default',
            p: 3,
          }}
        >
          <Typography>
            {artPiece[activeStep].description}
          </Typography>
        </Paper>

        <MobileStepper
          variant="progress"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>

      <FeedbackForm artpieceId={artpieceId} artpieceName={artpieceName} />
    </div>
  )
}

export default Artpiece;