import React from 'react';
import { Box, Grid, Typography, Container, Card, CardContent, CardMedia } from '@mui/material';

const services = [
  {
    imageUrl: 'https://content.jdmagicbox.com/v2/comp/bangalore/r6/080pxx80.xx80.150902130051.f4r6/catalogue/ybs-a1-fabrication-grill-work-bangalore-1kb4z9czgc.jpg',
    title: 'Welding Services',
    description: 'We provide top-notch welding services for various applications.',
  },
  {
    imageUrl: 'https://axioma.co.uk/wp-content/uploads/2024/03/DALL%C2%B7E-2024-03-05-11.23.44-An-overview-of-various-car-dent-pullers-and-repair-kits-from-different-brands-displayed-on-a-wooden-table.-This-collection-includes-suction-cup-pulle-300x300.webp',
    title: 'Dent Pulling Services',
    description: 'Professional dent pulling services to restore your vehicle’s look.',
  },
  {
    imageUrl: 'https://xometry.eu/wp-content/uploads/2021/04/plasma-cutting-services-1024x681-1.jpg',
    title: 'Other Service',
    description: 'High precision plasma cutting services for industrial needs. Powerful vacuum cleaning solutions for heavy-duty industrial applications. Efficient and reliable compressors for all industrial air supply needs.',
  },
  {
    imageUrl: 'https://www.krishnaautoelectric.com/blog/wp-content/uploads/2017/09/A-Look-at-Automobile-Spare-Parts-Glossary.jpg',
    title: 'Spare Parts',
    description: 'Reliable compressor services for various industrial applications.',
  },
  {
    imageUrl: 'https://images.moneycontrol.com/static-mcnews/2024/05/20240501104341_market_stocks_sensex_Nifty.jpg?impolicy=website&width=1600&height=900',
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
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                image={service.imageUrl}
                alt={service.title}
                height="200"
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                  {service.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MainPage;
