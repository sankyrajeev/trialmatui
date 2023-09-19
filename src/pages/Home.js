import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import '../App.css';
import Typography from '@mui/material/Typography';
import Image from 'mui-image';

import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import MyVerticallyCenteredModal from '../components/MyVerticallyCenteredModal';
import About from './About';



const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);

  const handleScroll = () => {
    const position = typeof window !== 'undefined' ? window.pageYOffset : 0;

    if (position > 100) {
      setIsVisible(true);
    }

    if (position > 400) { // Adjust this value based on where your "About Me" section is
      setIsAboutVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        className="bg-cover bg-center  h-screen flex items-center justify-center"
        style={{ backgroundImage: `url('/assets/rm222batch5-mind-10.jpg')` }}
      >
        <Container maxWidth="md">
          <div className={`name-home bg-opacity-50 p-8 rounded-lg font-poppins ${isVisible ? 'fade-in-up' : ''}`}>
            <Typography variant="h2" className="text-center mb-4" sx={{ fontFamily: 'Croissant One' }}>
              Sankarsh Rajeev
            </Typography>
            <Typography variant="body1" className="text-center font-poppins">
              Front-End Developer & Music Producer
            </Typography>
          </div>

        </Container>
      </div>
      <Image
        src="./assets/background-picture.jpeg"
        alt="Background"
        className="w-full h-auto max-h-[350px]"
        sx={{
          objectFit: 'contain',
        }}
      />

      {/* About Me Section */}
      <About />

      <div style={{ position: 'relative' }}>
        <Image
          src="./assets/background-picture-1.jpeg"
          alt="Background"
          className="w-full h-auto max-h-[450px]"
          style={{
            filter: 'grayscale(100%)',
          }}
          sx={{
            objectFit: 'contain',
          }}
        />
        <p className="responsive-text"
          style={{
            position: 'absolute',
            display:'flex',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontFamily: 'poppins',
            color:"white",
            
            padding: '10px',
            borderRadius: '5px',
            maxWidth: '80%', /* Limit the width of the text */
          }}
        >
          "Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston Churchill
        </p>
      </div>

    </div>
  );
};

export default Home;
