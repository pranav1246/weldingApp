import React from 'react';
import CardComponent from '../CardComponent';
import { Box, Grid } from '@mui/material';

const SpareParts = () => {
    const cardData = [
        {
            imageUrl: "https://i.postimg.cc/7PWtnt5b/Whats-App-Image-2024-06-30-at-15-55-59.jpg",
            title: "",
            price: "",
            details: {}
        },
        {
            imageUrl: "https://i.postimg.cc/BbkhZbr2/Whats-App-Image-2024-06-30-at-15-56-01.jpg",
            title: "",
            price: "",
            details: {}
        },
        {
            imageUrl: "https://i.postimg.cc/sxv6R7NV/Whats-App-Image-2024-06-30-at-15-56-02.jpg",
            title: "",
            price: "",
            details: {}
        },
        {
            imageUrl: "https://i.postimg.cc/nzdR50TR/Whats-App-Image-2024-06-30-at-15-56-02-1.jpg",
            title: "",
            price: "",
            details: {}
        },
        {
            imageUrl: "https://i.postimg.cc/fLWqB67S/Whats-App-Image-2024-06-30-at-15-56-02-2.jpg",
            title: "",
            price: "",
            details: {}
        },
        {
            imageUrl: "https://i.postimg.cc/8Cmnd1vV/Whats-App-Image-2024-06-30-at-15-56-03.jpg",
            title: "",
            price: "",
            details: {}
        },
        {
            imageUrl: "https://i.postimg.cc/R0BDn3NR/Whats-App-Image-2024-06-30-at-15-56-03-1.jpg",
            title: "",
            price: "",
            details: {}
        },
        {
            imageUrl: "https://i.postimg.cc/rwWHmGFs/Whats-App-Image-2024-06-30-at-15-56-04.jpg",
            title: "",
            price: "",
            details: {}
        },
        {
            imageUrl: "https://i.postimg.cc/c4Pj0kWP/Whats-App-Image-2024-06-30-at-15-56-04-1.jpg",
            title: "",
            price: "",
            details: {}
        },
        {
            imageUrl: "https://i.postimg.cc/YqvZcK51/Whats-App-Image-2024-06-30-at-15-56-05.jpg",
            title: "",
            price: "",
            details: {}
        },
        {
            imageUrl: "https://i.postimg.cc/sf6q0DNj/Whats-App-Image-2024-06-30-at-15-56-05-1.jpg",
            title: "",
            price: "",
            details: {}
        },
        {
            imageUrl: "https://i.postimg.cc/j259dGLY/Whats-App-Image-2024-06-30-at-15-56-06.jpg",
            title: "",
            price: "",
            details: {}
        },
        {
            imageUrl: "https://i.postimg.cc/wv9Zntzv/Whats-App-Image-2024-06-30-at-15-56-06-1.jpg",
            title: "",
            price: "",
            details: {}
        },
        {
            imageUrl: "https://i.postimg.cc/90nk4J7R/Whats-App-Image-2024-06-30-at-15-56-06-2.jpg",
            title: "",
            price: "",
            details: {}
        },
        {
            imageUrl: "https://i.postimg.cc/Hx3RmpWt/Whats-App-Image-2024-06-30-at-15-56-06-3.jpg",
            title: "",
            price: "",
            details: {}
        },
        {
            imageUrl: "https://i.postimg.cc/KYSdrqst/Whats-App-Image-2024-06-30-at-15-56-07.jpg",
            title: "",
            price: "",
            details: {}
        },
        {
            imageUrl: "https://i.postimg.cc/6QrFHrDg/Whats-App-Image-2024-06-30-at-15-56-07-1.jpg",
            title: "",
            price: "",
            details: {}
        },
        {
            imageUrl: "https://i.postimg.cc/y6LC4Tkz/Whats-App-Image-2024-06-30-at-15-56-07-2.jpg",
            title: "",
            price: "",
            details: {}
        },
        {
            imageUrl: "https://i.postimg.cc/cL8p3yTs/Whats-App-Image-2024-06-30-at-15-56-07-3.jpg",
            title: "",
            price: "",
            details: {}
        },
        {
            imageUrl: "https://i.postimg.cc/nc58Mc4R/Whats-App-Image-2024-06-30-at-15-56-08.jpg",
            title: "",
            price: "",
            details: {}
        },
        {
            imageUrl: "https://i.postimg.cc/MTD2G75V/Whats-App-Image-2024-06-30-at-15-56-08-1.jpg",
            title: "",
            price: "",
            details: {}
        }
    ];

    return (
        <Box sx={{ flexGrow: 1, padding: '20px', marginLeft: '50px' }}>
            <Grid container spacing={2}>
                {cardData.map((card, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <CardComponent
                            imageUrl={card.imageUrl}
                            title={card.title}
                            price={card.price}
                            details={card.details}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default SpareParts;
