import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import MyVerticallyCenteredModal from '../components/MyVerticallyCenteredModal';

import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const About = () => {

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
  return (
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
  );
}

export default About;
