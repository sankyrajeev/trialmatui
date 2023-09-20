import { Typography } from '@mui/material';
import React from 'react';

const Card = (props) => (
  <div className="card">
    <img src={props.imgUrl} alt={props.alt || 'Image'} />
    <div className="card-content">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  </div>
);

const CardContainer = (props) => (
  <div className="cards-container">
    {
      props.cards.map((card) => (
        <Card title={card.title} content={card.content} imgUrl={card.imgUrl} key={card.id} />
      ))
    }
  </div>
);

export default function Portfolio() {
  const frontendProjects = [
    {id: 1, title: 'Project 1', content: 'HTML, CSS', imgUrl: 'https://unsplash.it/200/200'},
    {id: 2, title: 'Project 2', content: 'JavaScript', imgUrl: 'https://unsplash.it/201/200'},
    {id: 2, title: 'Project 2', content: 'JavaScript', imgUrl: 'https://unsplash.it/201/200'},
    {id: 2, title: 'Project 2', content: 'JavaScript', imgUrl: 'https://unsplash.it/201/200'},
    {id: 2, title: 'Project 2', content: 'JavaScript', imgUrl: 'https://unsplash.it/201/200'},
    {id: 2, title: 'Project 2', content: 'JavaScript', imgUrl: 'https://unsplash.it/201/200'},
    /* add more */
  ];

  const fullstackProjects = [
    {id: 3, title: 'Project A', content: 'Node.js, MongoDB', imgUrl: 'https://unsplash.it/200/201'},
    {id: 4, title: 'Project B', content: 'Python, Django', imgUrl: 'https://unsplash.it/201/201'},
    /* add more */
  ];

  const musicLinks = [
    /* Populate with music Spotify Links */
  ];

  return (
    
    <div className="container">
      {/* <Typography className='mt-5 pb-5 text-center font-bold' style={{textAlign: 'center'}} variant="h2"  sx={{ fontFamily: 'Croissant One'}}>My Portfolio</Typography> */}
      
      <Typography className='mt-5 mb-5 text-center font-bold' variant="h4"  sx={{ fontFamily: 'Croissant One'}}>Front End Development</Typography>
      <CardContainer cards={frontendProjects} />

      <Typography className='mt-5 mb-5 text-center font-bold' variant="h4"  sx={{ fontFamily: 'Croissant One'}}>Full Stack Development</Typography>
      <CardContainer cards={fullstackProjects} />

      <h2>Music</h2>
      {/* Render your music Spotify links here */}
    </div>
  );
}
