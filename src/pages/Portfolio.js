import { Typography } from '@mui/material';
import React from 'react';

const Card = (props) => (
  <a href={props.url} target="_blank" rel="noopener noreferrer">
    <div className="card">
      <img src={props.imgUrl} alt={props.alt || 'Image'} />
      <div className="card-content">
        <h2 className='text-bold'>{props.title}</h2>
        <p>{props.content}</p>
        
      </div>
    </div>
  </a>
);

const CardContainer = (props) => (
  <div className="cards-container ">
    {
      props.cards.map((card) => (
        <Card 
          title={card.title} 
          url={card.url}
          content={card.content} 
          imgUrl={card.imgUrl} 
          technologies={card.technologies}
          key={card.id} 
        />
      ))
    }
  </div>
);

export default function Portfolio() {
  const frontendProjects = [
    {id: 3, title: 'Note Taker', content: 'A Front-End Application', imgUrl: '/assets/port_assets/notes.jpeg',url:"https://shocking-zombie-29357.herokuapp.com/"},
    {id: 5, title: 'Work Day Scheduler', content: 'A Front-End Application', imgUrl: '/assets/port_assets/workday.jpeg',url:"https://sankyrajeev.github.io/work-day-scheduler/"},
    {id: 4, title: 'Weather Dashboard', content: 'A Front-End Application', imgUrl: '/assets/port_assets/weather.jpeg',url:"https://sankyrajeev.github.io/Weather-Dashboard/"},
    {id: 1, title: 'Travelite', content: 'A Travel App', imgUrl: '/assets/port_assets/travel.jpeg', url:"https://travelite.herokuapp.com/#/"},
    {id: 2, title: 'Washoe', content: 'A Resposive Web Design page', imgUrl: '/assets/port_assets/washoe.jpeg',url:"https://sankyrajeev.github.io/washoe-final/"},
    // add more
  ];

  const fullstackProjects = [
    {id: 2, title: 'Washoe', content: 'A Resposive Web Design page', imgUrl: 'https://unsplash.it/201/200',url:"https://sankyrajeev.github.io/washoe-final/"},
    {id: 4, title: 'Project B', content: 'An e-commerce site', imgUrl: 'https://unsplash.it/201/201', },
    // add more
  ];

  const musicLinks = [
    // Populate with music Spotify Links
  ];

  return (
    <div
        className="bg-cover bg-center  h-screen flex items-center justify-center"
        style={{ backgroundImage: `url('/assets/rm222batch5-mind-10.jpg')` }}
      >
    <div className="container">
      <Typography className='mt-5 mb-5 text-center font-bold' variant="h4"  sx={{ fontFamily: 'Croissant One'}}>My Projects</Typography>
      <CardContainer className="mb-5" cards={frontendProjects} />

      {/* <Typography className='mt-5 mb-5 text-center font-bold' variant="h4"  sx={{ fontFamily: 'Croissant One'}}>Full Stack Projects</Typography>
      <CardContainer cards={fullstackProjects} /> */}

      {/* <h2>Music</h2>
      Render your music Spotify links here */}
    </div>
    </div>
  );
}
