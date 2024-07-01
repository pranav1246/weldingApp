import React from 'react';
import { Box, Grid, Card, CardContent, Typography } from '@mui/material';

const packages = [
  {
    title: 'Package 1',
    price: 5000,
    minInvestment: 500,
    maxInvestment: 1000,
  },
  {
    title: 'Package 2',
    price: 10000,
    minInvestment: 1500,
    maxInvestment: 3500,
  },
  {
    title: 'Package 3',
    price: 25000,
    minInvestment: 3000,
    maxInvestment: 10000,
  },
];

const Stock = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url(https://i.postimg.cc/RFXbmJYP/Whats-App-Image-2024-06-30-at-16-19-16.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '150vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 2,
        }}
      >
        <Grid container spacing={2} justifyContent="center">
          {packages.map((pkg) => (
            <Grid item xs={12} sm={6} md={4} key={pkg.title}>
              <Card sx={{ maxWidth: 345, backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
                <CardContent>
                  <Typography variant="h5" component="div" gutterBottom sx={{ color: 'white' }}>
                    {pkg.title}
                  </Typography>
                  <Typography variant="h6" sx={{ color: 'white' }}>
                    Price: {pkg.price}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'white' }}>
                    Min Investment: {pkg.minInvestment}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'white' }}>
                    Max Investment: {pkg.maxInvestment}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Stock;
