import React from 'react';
import BlogContent from '../blogs/BlogContent';
import { Typography } from '@mui/material';
import StartupGrowth from '../blogs/StartupGrowth';

function Blog() {
  const blogs = [
    {
      id:3,
      title: 'Navigating the Labyrinth: A Guide to Successful Startup Growth',
      publishedDate: 'September 21, 2023',
      author: 'Sankarsh Rajeev',
      content: "The startup ecosystem is both exciting and perilous. For every successful unicorn, there are countless startups that fail to take off. Achieving sustainable growth is a complex challenge that requires strategic planning, execution, and a bit of luck. In this article, we delve into the key factors that contribute to successful startup growth",
      image: '/assets/blog_assets/startup_blog.jpeg'
    },
    {
      id:2,
      title: 'The Rise of Electric Cars: A Sustainable Future or Just a Trend?',
      publishedDate: 'September 20, 2023',
      author: 'Sankarsh Rajeev',
      content: "Artificial Intelligence (AI) holds enormous promise, offering solutions to a multitude of challenges faced by humanity. It's already revolutionizing sectors like healthcare, logistics, and consumer technology. However, as with any powerful tool, the reach and impact of AI aren't solely beneficial. There are serious concerns about its unchecked growth and potential to negatively impact various aspects of human life and society",
      image: '/assets/blog_assets/ai_blog.jpeg'
    },
    {
      id:1,
      title: 'How EVs are Changing the Future',
      publishedDate: 'September 19, 2023',
      author: 'Sankarsh Rajeev',
      content:'Electric vehicles (EVs) have been hailed as the future of transportation, offering a cleaner, more sustainable alternative to fossil-fuel-powered cars. But are they truly the solution to our environmental woes?',
      image: '/assets/blog_assets/ev_blog.jpeg'
    },
   
    
    // Add more blogs if you'd like
  ];

  return (
    <div 
      className="blog-page flex flex-col items-center" 
      style={{ backgroundImage: `url('/assets/rm222batch5-mind-10.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="blog-page-header flex items-center justify-center mt-5">
        <Typography variant="h2" className="text-center font-bold" sx={{ fontFamily: 'Croissant One' }}>
          Blog's
        </Typography>
      </div>
      <div className="blog-contents-container flex flex-wrap justify-center">
        {blogs.map((blog, index) => (
          <div key={index} className="single-blog-container my-5 lg:w-1/2 md:w-full sm:w-full">
            <BlogContent
              id={blog.id}
              title={blog.title}
              publishedDate={blog.publishedDate}
              author={blog.author}
              content={blog.content}
              image={blog.image}
            />

          </div>
          
        ))}
        
      </div>
    </div>
  );
}

export default Blog;
