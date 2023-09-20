import React, { useState } from 'react';
import { Container, Typography, Paper } from '@mui/material';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function BlogContent(props) {
  const [showFullText, setShowFullText] = useState(false);

  const toggleReadMore = () => {
    setShowFullText(!showFullText);
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <Container maxWidth="md">
          <Paper className="p-8 rounded-lg bg-opacity-80 backdrop-blur-lg">
            <Typography 
              variant="h3" 
              style={{fontSize: 'clamp(1.5rem, 3vw, 1.5rem)'}}
              className="font-bold mb-4"
            >
              {props.title}
            </Typography>
            <Typography variant="subtitle1" className="text-gray-600 mb-4">
              Published on {props.publishedDate} by {props.author}
            </Typography>
            <div className="flex justify-center mb-5">
              <img
                src={props.image}
                alt="Blog Post"
                className="w-[300px] h-[300px] rounded-lg shadow-lg object-cover"
              />
            </div>
            <div>
              <Typography variant="body1" className="text-gray-800">
                {showFullText ? props.content : `${props.content.substring(0, 200)}...`}
              </Typography>
            </div>
            <div className="mt-6 text-center">
              {!showFullText ? (
                <Button variant="outline-secondary" onClick={toggleReadMore} id="myBtn">
                  Read more
                </Button>
              ) : (
                <Button variant="outline-secondary"  onClick={toggleReadMore} id="myBtn">
                  Read less
                </Button>
              )}
              <div className="mt-4">
                <Link to={`/${props.id}`} style={{ color: 'blue' }}>Click here </Link> 
                to read full article
              </div>
            </div>
          </Paper>
        </Container>
      </div>
    </>
  );
}

export default BlogContent;
