import React from 'react';
import { Typography, Container, Paper } from '@mui/material';

export default function Ev_blog() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Container maxWidth="md">
        <Paper className="p-8 rounded-lg bg-opacity-80 backdrop-blur-lg">
          <Typography variant="h3" className="text-4xl font-bold mb-4 mt-5 text-center">
            How EVs are Changing the Future
          </Typography>
          <Typography variant="subtitle1" className="text-gray-600 mb-4 text-center">
            Published on September 19, 2023 by Sankarsh Rajeev
          </Typography>
          <img
            src="/assets/blog_assets/ev_blog.jpeg" // Replace with an actual image URL
            alt="EVs Changing the Future"
            className="w-full rounded-lg shadow-lg mb-4"
          />
          <div>
            <Typography variant="body1" className="text-gray-800">
              Electric vehicles (EVs) have been hailed as the future of transportation, offering a cleaner, more sustainable alternative to fossil-fuel-powered cars. But are they truly the solution to our environmental woes?
            </Typography>

            <Typography variant="h5" className="text-2xl font-semibold my-4">
              The Pros of Electric Cars
            </Typography>

            <Typography variant="body1" className="text-gray-800">
              1. Zero Emissions: Electric cars produce zero tailpipe emissions, reducing air pollution.
            </Typography>
            <Typography variant="body1" className="text-gray-800">
              2. Energy Efficiency: They are generally more energy-efficient compared to traditional vehicles.
            </Typography>
            <Typography variant="body1" className="text-gray-800">
              3. Government Incentives: Many countries offer tax benefits and incentives for EV buyers.
            </Typography>

            <Typography variant="h5" className="text-2xl font-semibold my-4">
              The Cons of Electric Cars
            </Typography>

            <Typography variant="body1" className="text-gray-800">
              1. Battery Production: The manufacturing process of EV batteries can be harmful to the environment.
            </Typography>
            <Typography variant="body1" className="text-gray-800">
              2. Limited Range: Most EVs have a limited driving range compared to gasoline-powered cars.
            </Typography>
            <Typography variant="body1" className="text-gray-800">
              3. Charging Infrastructure: Insufficient charging stations can be a hurdle for potential EV owners.
            </Typography>

            <Typography variant="h5" className="text-2xl font-semibold my-4">
              The Road Ahead
            </Typography>

            <Typography variant="body1" className="text-gray-800 mb-4">
              As technology advances, many of the current limitations of electric cars are likely to be overcome. However, for a truly sustainable future, we also need to look at renewable sources of electricity and a more eco-friendly battery production process.
            </Typography>
          </div>
        </Paper>
      </Container>
    </div>
  );
}
