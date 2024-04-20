import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { Modal } from '@mui/material';

import project1Image1 from '../assets/projects_assets/mosaique_projet-visionfoot_2.jpg';
import project1Image2 from '../assets/projects_assets/Photo équipe visionfoot1.jpg';
import project1Image3 from '../assets/projects_assets/mosaique_projet-visionfoot_1.jpg';

import project2Image1 from '../assets/projects_assets/trials3.PNG';
import project2Image2 from '../assets/projects_assets/trials0.PNG';
import project2Image3 from '../assets/projects_assets/trials4.jpg';

import project3Image1 from '../assets/projects_assets/images (1).png';
import project3Image2 from '../assets/projects_assets/634da835606a4e733e2e1c35ba0fae43.avif';
import project3Image3 from '../assets/projects_assets/images.png';



const data = [
  {
    label: 'VisionFoot, assisting inclusion',
    overview: 'Description for Slide 1',
    images: [
      project1Image1,
      project1Image2,
      project1Image3,
    ],
    githubLink: 'https://github.com/',
  },
  {
    label: 'KrakenVision: Image Segmentation, Counting, & Depth Camera Integration',
    overview: 'overview for Slide 2',
    images: [
      project2Image1,
      project2Image2,
      project2Image3,
    ],
    githubLink: 'https://github.com/',
  },
  {
    label: 'API Servers: littlelemon & go-bank-server',
    overview: 'Overview for API Servers project',
    images: [
      project3Image1,
      project3Image2,
      project3Image3,
    ],
    githubLink: 'https://github.com/',
  }
];


function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = data.length;

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 1200, flexGrow: 1, width: '100%' }}>
     <Paper square elevation={0} sx={{ display: 'flex', alignItems: 'center', height: 50, pl: 2, bgcolor: 'background.default', mb: 2 }}>
      <Typography variant="h5" sx={{ textAlign: 'center', width: '100%', fontWeight: 'bold', color: 'black' }}>
        {data[activeStep].label}
      </Typography>
    </Paper>

    <SwipeableViews
      axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
      index={activeStep}
      onChangeIndex={handleStepChange}
      enableMouseEvents
    >
      {data.map((item, index) => (
        <div key={index}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            {item.images.map((imgPath, idx) => (
              <Box
                key={idx}
                component="img"
                sx={{
                  height: 300,
                  width: '30%', // Adjust the width to fit three images in a row
                  borderRadius: 8,
                  objectFit: 'cover',
                }}
                src={imgPath}
                alt={item.label}
              />
            ))}
          </Box>
        </div>
      ))}
    </SwipeableViews>
    <div className="btn-container">
      <button
        className="btn btn-color-2 project-btn"
        onClick={() => window.open(data[activeStep].githubLink)}
      >
        Github
      </button>
      <button
        className="btn btn-color-2 project-btn"
        onClick={handleOpen}
      >
        Project Overview
      </button>
    </div>
    <MobileStepper
      steps={maxSteps}
      position="static"
      activeStep={activeStep}
      nextButton={
        <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
          Next {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />} Back
        </Button>
      }
    />

    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
  sx={{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    borderRadius: '8px',
    boxShadow: 24,
    p: 4,
  }}
>
  <Typography id="modal-modal-title" variant="h6" component="h2">
    {data[activeStep].label}
  </Typography>
  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    {data[activeStep].overview}
  </Typography>
</Box>

    </Modal>
  </Box>
  );
}

export default SwipeableTextMobileStepper;
