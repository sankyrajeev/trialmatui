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
      <div
        className="bg-cover bg-center  h-screen flex items-center justify-center" id="About"
        style={{ backgroundImage: `url('/assets/rm222batch5-mind-10.jpg')` }}
      >
        <Container maxWidth="md">
          <div className={`bg-opacity-50 p-8 rounded-lg font-poppins ${isAboutVisible ? 'fade-in-up' : ''}`}>
            <Typography variant="h2" className="text-center mb-4" sx={{ fontFamily: 'Croissant One' }}>
              About Me
            </Typography>
            <Typography variant="body1" className="text-center font-poppins">
              I am a passionate and creative web developer and designer with a keen eye for detail and a drive for excellence. With two years of experience in the industry, I've had the privilege of working with diverse clients and projects, each contributing to my growth and skillset.

              My mission is to bring ideas to life through cutting-edge web design and development. Whether it's crafting a visually stunning website, optimizing user experiences, or developing robust, user-friendly applications, I'm dedicated to delivering results that exceed expectations.
            </Typography>
          </div>
          <div maxWidth="md" className='text-center mb-4 p-8 space-x-8 ' spacing={{ xs: 1, sm: 2 }}>
            <a href="https://www.instagram.com/iamvontell" target="_blank" rel="noopener noreferrer">
              <InstagramIcon
                color="disabled"
                fontSize="large"
                className="hover:cursor-pointer hover:color-primary icon-hover"
              />
            </a>

            <a href="https://www.linkedin.com/in/sankarshrajeev" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon
                color="disabled"
                fontSize="large"
                className="hover:cursor-pointer icon-hover"
              />
            </a>

            <a href="https://www.github.com/sankyrajeev" target="_blank" rel="noopener noreferrer">
              <GitHubIcon
                color="disabled"
                fontSize="large"
                className="hover:cursor-pointer icon-hover"
              />
            </a>


            <EmailIcon
              onClick={() => setModalShow(true)}
              color="disabled"
              fontSize="large"
              className="hover:cursor-pointer icon-hover"
            />
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />



          </div>
        </Container>
      </div>

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
