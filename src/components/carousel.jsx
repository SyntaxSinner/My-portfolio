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
import project1Image2 from '../assets/projects_assets/Photo-équipe-visionfoot1 (1).jpeg';
import project1Image3 from '../assets/projects_assets/mosaique_projet-visionfoot_1.jpg';

import project2Image1 from '../assets/projects_assets/trials3.jpg';
import project2Image2 from '../assets/projects_assets/trials0.jpg';
import project2Image3 from '../assets/projects_assets/trials4.jpeg';




const data = [
  {
    label: 'VisionFoot, assisting inclusion',
    overview: '«I make 4 my city » is an international digital fabrication competition that unites the network of solidarity FabLabs supported by the Orange Foundation. In its third consecutive year, this challenge brings together 16 teams, including 5 from the solidarity FabLabs of the AUF, developed in partnership with the Orange Foundation. Within this context, our team embarked on a mission to revolutionize blind football training with VisionFoot. We developed an AI-powered ball thrower designed specifically to assist visually impaired athletes in honing their skills on the field. The VisionFoot system utilizes advanced AI algorithms to detect and track players participating in blind football. By seamlessly integrating into training sessions, our technology autonomously pursues players, assisting them in receiving passes and enhancing their gameplay. Real-time information and recordings about each players movements are displayed to coaches, enabling in-depth analysis of strategy and behavior. Our goal with VisionFoot is clear: to break down barriers and empower blind individuals to fully integrate into sports. By providing autonomous training solutions, we aim to foster inclusivity and enable visually impaired athletes to pursue their passion for football with confidence and independence.',
    images: [
      project1Image1,
      project1Image2,
      project1Image3,
    ],
    githubLink: 'https://github.com/SyntaxSinner?tab=repositories',
  },
  {
    label: 'KrakenVision for Octomiro: Image Segmentation, Counting, & Depth Camera Integration',
    overview: 'During a transformative internship experience, \nour team at Octomiro embarked on a groundbreaking mission to redefine industrial inspection processes. Leveraging the power of computer vision, our solution was designed to streamline warehouse operations by automating object counting and dimension extraction. \nAt its core, our computer vision pipeline is a testament to innovation. We harnessed the capabilities of depth cameras and state-of-the-art segmentation models to create a robust system capable of validating product entries with unparalleled accuracy and efficiency. \nMy role in this ambitious project was to architect the processing pipeline from end to end. This involved orchestrating the ingestion of RGB and depth images from RealSense cameras, which were then transmitted to a central processing server. Here, we leveraged cutting-edge techniques to construct a 3D representation of the captured space and identify objects of interest using our proprietary segmentation model, Little SAM. \nDespite initial challenges posed by limited compute resources, our determination led us to develop a highly optimized version of the SAM model, achieving an impressive 74% accuracy during the prototyping phase. With continued enhancements and optimizations, we successfully deployed our fully functioning processing pipeline, testing it across various industrial environments. \nThe impact of our solution was profound. By replacing manual object counting with automated computer vision, we significantly improved time efficiency and accuracy, revolutionizing traditional inspection methods. Our success not only earned our team a startup label in Tunisia but also established Octomiro as a formidable competitor in computer vision applications, setting new standards for industrial inspection technology.',
    images: [
      project2Image1,
      project2Image2,
      project2Image3,
    ],
    githubLink: 'https://github.com/SyntaxSinner/RealSenseWrapper',
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
    bgcolor: 'white', // Black background
    borderRadius: '8px',
    boxShadow: 24,
    p: 4,
  }}
>
  <Typography id="modal-modal-title" variant="h6" component="h2">
    {data[activeStep].label}
  </Typography>
  <Typography id="modal-modal-description" sx={{ mt: 2, color : 'black' }}>
    {data[activeStep].overview}
  </Typography>
</Box>

    </Modal>
  </Box>
  );
}

export default SwipeableTextMobileStepper;
