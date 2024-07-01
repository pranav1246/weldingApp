import React from 'react';
import { Box, Grid, Typography, Container } from '@mui/material';

const services = [
  {
    imageUrl: 'https://via.placeholder.com/300', // Replace with actual image URLs
    title: 'Welding Services',
    description: 'We provide top-notch welding services for various applications.',
  },
  {
    imageUrl: 'https://via.placeholder.com/300', // Replace with actual image URLs
    title: 'Dent Pulling Services',
    description: 'Professional dent pulling services to restore your vehicle’s look.',
  },
  {
    imageUrl: 'https://via.placeholder.com/300', // Replace with actual image URLs
    title: 'Plasma Cutting',
    description: 'High precision plasma cutting services for industrial needs.',
  },
  {
    imageUrl: 'https://via.placeholder.com/300', // Replace with actual image URLs
    title: 'Compressor Services',
    description: 'Reliable compressor services for various industrial applications.',
  },
  {
    imageUrl: 'https://via.placeholder.com/300', // Replace with actual image URLs
    title: 'Stock Advisory',
    description: 'Expert stock advisory and investment services to grow your wealth.',
  },
];

const MainPage = () => {
  return (
    <Container>
      <Box sx={{ mt: 4, mb: 4, textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom>
          Welcome to Our Service Portal
        </Typography>
        <Typography variant="h6" color="text.secondary">
          We provide a range of high-quality services to meet all your needs. Explore our offerings below.
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <img src={service.imageUrl} alt={service.title} style={{ width: '100%', height: 'auto' }} />
              <Typography variant="h5" gutterBottom sx={{ mt: 2 }}>
                {service.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {service.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MainPage;
